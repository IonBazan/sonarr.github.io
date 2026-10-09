import { existsSync, globSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import Handlebars from 'handlebars';
import { defineConfig } from 'vite';

const themeDir = import.meta.dirname;

function registerPartials(hbs, dir) {
  for (const file of globSync('**/*.{hbs,html}', { cwd: dir })) {
    hbs.registerPartial(file.replace(/\.(hbs|html)$/, ''), readFileSync(resolve(dir, file), 'utf8'));
  }
}

function packageDir(fromDir, name) {
  for (let dir = fromDir; dir !== dirname(dir); dir = dirname(dir)) {
    const candidate = resolve(dir, 'node_modules', name);
    if (existsSync(candidate)) {
      return candidate;
    }
  }
  throw new Error(`Cannot find package ${name} from ${fromDir}`);
}

function iconHelper(siteDir) {
  return (name) => {
    const brand = name.startsWith('si:');
    const file = brand
      ? resolve(packageDir(siteDir, 'simple-icons'), 'icons', `${name.slice(3)}.svg`)
      : [resolve(siteDir, 'icons', `${name}.svg`), resolve(themeDir, 'icons', `${name}.svg`), resolve(packageDir(siteDir, 'lucide-static'), 'icons', `${name}.svg`)].find(existsSync);

    const svg = readFileSync(file, 'utf8')
      .replace(/<!--.*?-->|<title>.*?<\/title>/gs, '')
      .replace(/<svg[^>]*>/, (tag) => tag.replace(/\s(class|width|height|role)="[^"]*"/g, ''))
      .replace('<svg', `<svg class="icon" aria-hidden="true"${brand ? ' fill="currentColor"' : ''}`)
      .trim();

    return new Handlebars.SafeString(svg);
  };
}

// Reads the size from the PNG header so configs only need to list image paths.
function imageHelper(publicDir) {
  return (src, options) => {
    const png = readFileSync(resolve(publicDir, src.slice(1)));
    const attrs = Object.entries({ alt: '', ...options.hash })
      .map(([key, value]) => ` ${key}="${Handlebars.escapeExpression(value)}"`)
      .join('');
    return new Handlebars.SafeString(`<img src="${src}" width="${png.readUInt32BE(16)}" height="${png.readUInt32BE(20)}"${attrs} />`);
  };
}

// Gives every tab a unique panel id (downloads-linux-debian) and marks the first tab of each group as selected.
function prepareTabs(tabs, prefix) {
  return tabs.map((tab, i) => {
    const id = `${prefix}-${tab.id}`;
    return {
      ...tab,
      panelId: id,
      selected: i === 0,
      aliases: tab.aliases?.map((alias) => `${prefix}-${alias}`).join(' '),
      tabs: tab.tabs && prepareTabs(tab.tabs, id),
    };
  });
}

// Site pages link with relative paths, so any absolute URL leaves the site (including redirects like /discord).
function openExternalLinksInNewTab(html) {
  return html.replace(/<a\s[^>]*href="https?:\/\/[^"]*"[^>]*>/g, (tag) =>
    tag.includes('target=') ? tag : tag.replace(/>$/, ' target="_blank">'),
  );
}

export function defineSite(siteDir, site) {
  const root = resolve(siteDir, 'src');
  const publicDir = resolve(siteDir, 'public');
  const hbs = Handlebars.create();

  registerPartials(hbs, resolve(themeDir, 'partials'));
  registerPartials(hbs, resolve(root, 'partials'));
  hbs.registerHelper('icon', iconHelper(siteDir));
  hbs.registerHelper('image', imageHelper(publicDir));
  hbs.registerHelper('json', (value) => new Handlebars.SafeString(JSON.stringify(value)));

  const context = {
    ...site,
    downloads: prepareTabs(site.downloads, 'downloads'),
    year: new Date().getFullYear(),
  };

  const pages = globSync('**/*.html', { cwd: root, exclude: ['partials/**'] });

  return defineConfig({
    root,
    publicDir,
    resolve: {
      alias: { '/@theme': themeDir },
    },
    build: {
      outDir: resolve(siteDir, 'dist'),
      emptyOutDir: true,
      rolldownOptions: {
        input: Object.fromEntries(pages.map((page) => [page.replace(/\.html$/, ''), resolve(root, page)])),
      },
    },
    plugins: [
      {
        name: 'site-theme',
        transformIndexHtml: {
          order: 'pre',
          handler: (html) => openExternalLinksInNewTab(hbs.compile(html)(context)),
        },
        handleHotUpdate({ file, server }) {
          if (/\.(html|hbs|svg)$/.test(file) || file.endsWith('site.config.js')) {
            server.restart();
          }
        },
      },
    ],
  });
}
