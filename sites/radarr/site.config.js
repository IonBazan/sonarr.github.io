export default {
  name: 'Radarr',
  title: 'Radarr - Movie collection manager for Usenet and Torrents',
  description: 'Radarr is a movie collection manager for Usenet and BitTorrent users.',
  url: 'https://radarr.video',
  domain: 'Radarr.video',
  github: 'https://github.com/Radarr/Radarr',
  accent: '#ffc230',
  logo: '/img/logo-256.png',
  favicon: '/img/favicon.ico',
  port: 7878,

  hero: {
    title: 'Radarr is a movie collection manager for Usenet and BitTorrent users.',
    lead: 'It can monitor multiple RSS feeds for new movies and will interface with clients and indexers to grab, sort, and rename them. It can also be configured to automatically upgrade the quality of existing files in the library when a better quality format becomes available.',
    image: '/img/slider/moviedetails.png',
    alt: 'Radarr movie details page',
  },

  features: [
    { title: 'Calendar', text: 'See all your upcoming movies in one convenient location.', image: '/img/features/calendar.png', wide: true },
    { title: 'Manual Search', text: 'Find all the releases, choose the one you want and send it right to your download client.', image: '/img/features/manualsearch.png' },
    { title: 'Automatic Failed Download Handling', text: 'Password protected releases, missing repair blocks or virtually any other reason? Radarr will automatically blocklist the release and try another one until it finds one that works.', image: '/img/features/blacklist.png' },
    { title: 'Custom Formats', text: 'Custom Formats allow fine control over release prioritization and selection. As simple as a single preferred word or as complex as you want with multiple criteria and regex.', image: '/img/features/custom-formats-settings.png', wide: true },
    { title: 'Collections and Lists', text: 'Follow your favorite collections, actors and directors.', image: '/img/slider/collection-lists.png', wide: true },
    { title: 'Multiple Movie Views', text: 'Browse your movies as posters, an overview or a table.', image: '/img/slider/posters.png' },
  ],

  downloads: [
    { id: 'windows', label: 'Windows', icon: 'windows', content: 'downloads/windows' },
    {
      id: 'linux',
      label: 'Linux',
      icon: 'si:linux',
      tabs: [
        { id: 'archlinux', label: 'Arch Linux', icon: 'si:archlinux', content: 'downloads/linux-archlinux' },
        { id: 'debianubuntu', label: 'Debian / Ubuntu', icon: 'si:debian', content: 'downloads/linux-debian' },
        { id: 'other', label: 'Others', icon: 'ellipsis', content: 'downloads/linux-other' },
      ],
    },
    { id: 'macos', label: 'macOS', icon: 'si:apple', content: 'downloads/macos' },
    {
      id: 'nas',
      label: 'NAS',
      icon: 'hard-drive',
      tabs: [
        { id: 'synology', label: 'Synology', icon: 'si:synology', content: 'downloads/nas-synology' },
        { id: 'qnap', label: 'QNAP', icon: 'si:qnap', content: 'downloads/nas-qnap' },
        { id: 'other', label: 'Others', icon: 'ellipsis', content: 'downloads/nas-other' },
      ],
    },
    { id: 'docker', label: 'Docker', icon: 'si:docker', content: 'downloads/docker' },
    { id: 'bsd', label: 'BSD', icon: 'si:freebsd', content: 'downloads/bsd' },
    { id: 'other', label: 'Others', icon: 'ellipsis', content: 'downloads/other' },
  ],

  support: [
    { title: 'Wiki', text: 'Check out the FAQ, API documentation and other guides.', icon: 'book-open', href: 'https://wiki.servarr.com/radarr' },
    { title: 'Discord', text: 'Join our Discord server for a chat.', icon: 'si:discord', href: 'https://radarr.video/discord' },
    { title: 'GitHub Issues', text: 'Track bugs and features for the things that matter to you.', icon: 'si:github', href: 'https://github.com/Radarr/Radarr/issues' },
  ],

  donate: {
    links: [
      { label: 'Open Collective', icon: 'si:opencollective', href: 'https://opencollective.com/radarr' },
      { label: 'GitHub Sponsors', icon: 'si:githubsponsors', href: 'https://github.com/sponsors/Radarr' },
    ],
    bitcoin: { address: '3QCJp3uEmfwffShoNDoZLPmvNuwQRgMM32', qr: '/img/bitcoinqr.png' },
  },

  api: {
    logo: '/img/logo-256.png',
    sources: [{ title: 'Radarr V3 API', slug: 'v3', url: 'https://raw.githubusercontent.com/Radarr/Radarr/develop/src/Radarr.Api.V3/openapi.json' }],
  },
};
