import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';

const root = resolve(import.meta.dirname, 'src');

function icon(name) {
  const file = name.startsWith('si:')
    ? resolve(import.meta.dirname, 'node_modules/simple-icons/icons', `${name.slice(3)}.svg`)
    : [resolve(root, 'icons', `${name}.svg`), resolve(import.meta.dirname, 'node_modules/lucide-static/icons', `${name}.svg`)].find(existsSync);

  return readFileSync(file, 'utf8')
    .replace(/<!--.*?-->|<title>.*?<\/title>/gs, '')
    .replace(/<svg[^>]*>/, (tag) => tag.replace(/\s(class|width|height|role)="[^"]*"/g, ''))
    .replace('<svg', `<svg class="icon" aria-hidden="true"${name.startsWith('si:') ? ' fill="currentColor"' : ''}`)
    .trim();
}

// Expands <include src="..."> and <icon name="..."> tags so pages can share markup without a template engine.
function render(html, dir) {
  return html
    .replace(/<include src="([^"]+)"\s*\/?>/g, (_, src) => {
      const file = resolve(dir, src);
      return render(readFileSync(file, 'utf8'), dirname(file));
    })
    .replace(/<icon name="([\w:-]+)"\s*\/?>/g, (_, name) => icon(name));
}

export default defineConfig({
  root,
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        index: resolve(root, 'index.html'),
        donate: resolve(root, 'donate.html'),
        privacy: resolve(root, 'privacy.html'),
        api: resolve(root, 'docs/api/index.html'),
      },
    },
  },
  plugins: [
    {
      name: 'partials',
      transformIndexHtml: {
        order: 'pre',
        handler: (html, ctx) => render(html, dirname(ctx.filename)),
      },
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.html') || file.endsWith('.svg')) {
          server.ws.send({ type: 'full-reload' });
        }
      },
    },
  ],
});
