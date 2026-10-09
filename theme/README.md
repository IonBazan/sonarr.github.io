# Servarr site theme

Shared layout, styles and build setup for the Sonarr, Radarr and Lidarr websites. Each site lives in `sites/<name>/` with its own content and config.

## Site layout

```
sites/<name>/
  site.config.js           name, colours, links, features, download tabs, donate and API settings
  vite.config.js           export default defineSite(import.meta.dirname, site)
  src/index.html           {{> home}}
  src/donate.html          {{> donate}}
  src/docs/api/index.html  {{> api}}
  src/partials/            site content, mostly install instructions (downloads/windows.html, ...)
  public/                  images and favicon
```

Every `.html` file in `src/` (outside `partials/`) becomes a page. A site can add its own pages by wrapping content in the layout:

```hbs
{{#> layout page="Privacy"}}
  <main class="section">...</main>
{{/layout}}
```

The site needs `vite`, `handlebars`, `simple-icons`, `lucide-static` and `@fontsource/lato` installed.

## Templates

Pages and partials are [Handlebars](https://handlebarsjs.com). Site partials override theme partials with the same name. Available to site content:

- `{{icon "name"}}` inlines a [Lucide](https://lucide.dev) icon, `si:name` a [Simple Icons](https://simpleicons.org) brand icon, or an SVG from the site's or theme's `icons/` folder.
- `{{image "/img/file.png" alt="..."}}` writes an `<img>` with width and height read from the PNG.
- `{{#> alert heading="..."}}...{{/alert}}` for an info box, `warning=true` for a warning.
- `{{> view-step}}` and `{{> docker-alternative}}` for the install steps every app shares.

## Download tabs

`downloads` in the config is a list of tabs. Each tab renders a partial (`content`) or a nested list (`tabs`). Panel ids are built from the path, for example `#downloads-linux-debian`, and `aliases` keeps old ids working.

## Running a site

```bash
yarn dev:sonarr
yarn build:sonarr
```

The build goes to `sites/<name>/dist`.
