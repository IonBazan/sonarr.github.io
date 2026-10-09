export default {
  name: 'Lidarr',
  title: 'Lidarr - Music collection manager for Usenet and Torrents',
  description: 'Lidarr is a music collection manager for Usenet and BitTorrent users.',
  url: 'https://lidarr.audio',
  domain: 'Lidarr.audio',
  github: 'https://github.com/Lidarr/Lidarr',
  accent: '#00a65b',
  logo: '/img/logo.png',
  favicon: '/img/favicon.ico',
  port: 8686,

  hero: {
    title: 'Lidarr is a music collection manager for Usenet and BitTorrent users.',
    lead: 'It can monitor multiple RSS feeds for new albums from your favorite artists and will interface with clients and indexers to grab, sort, and rename them. It can also be configured to automatically upgrade the quality of existing files in the library when a better quality format becomes available.',
    image: '/img/slider/artistdetails.png',
    alt: 'Lidarr artist details page',
  },

  features: [
    { title: 'Metadata Writing', text: 'Metadata tags a mess? No problem. Lidarr will whip your current library into shape and ensure any new music is tagged correctly and uniformly.', image: '/img/features/metadata.png', wide: true },
    { title: 'Calendar', text: 'See all your upcoming albums in one convenient location.', image: '/img/features/calendar.png' },
    { title: 'Manual Search', text: 'Find all the releases, choose the one you want, and send it right to your download client.', image: '/img/features/manualsearch.png' },
    { title: 'Import Lists', text: 'Follow your favorite artists or top 20 albums using import lists. Lists can be used from supported services like Last.FM and Headphones.', image: '/img/features/import_lists.png', wide: true },
    { title: 'Multiple Artist Views', text: 'Browse your library as posters, an overview or a table.', image: '/img/slider/posters.png', wide: true },
    { title: 'Built-in Updater', text: "See what's new without leaving the comfort of the app.", image: '/img/slider/updates2.png' },
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
        { id: 'other', label: 'Others', icon: 'ellipsis', content: 'downloads/nas-other' },
      ],
    },
    { id: 'docker', label: 'Docker', icon: 'si:docker', content: 'downloads/docker' },
    { id: 'bsd', label: 'BSD', icon: 'si:freebsd', content: 'downloads/bsd' },
    { id: 'other', label: 'Others', icon: 'ellipsis', content: 'downloads/other' },
  ],

  support: [
    { title: 'Wiki', text: 'Check out the FAQ, API documentation and other guides.', icon: 'book-open', href: 'https://wiki.servarr.com/lidarr' },
    { title: 'Discord', text: 'Join our Discord server for a chat.', icon: 'si:discord', href: 'https://lidarr.audio/discord' },
    { title: 'GitHub Issues', text: 'Track bugs and features for the things that matter to you.', icon: 'si:github', href: 'https://github.com/Lidarr/Lidarr/issues' },
  ],

  donate: {
    links: [
      { label: 'Open Collective', icon: 'si:opencollective', href: 'https://opencollective.com/lidarr' },
      { label: 'GitHub Sponsors', icon: 'si:githubsponsors', href: 'https://github.com/sponsors/Lidarr' },
    ],
    bitcoin: { address: '3QCJp3uEmfwffShoNDoZLPmvNuwQRgMM32', qr: '/img/bitcoinqr.png' },
    referral: {
      label: 'DigitalOcean referral link',
      footer: 'Powered by DigitalOcean',
      icon: 'si:digitalocean',
      href: 'https://www.digitalocean.com/?refcode=3bf289c0aa2e&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge',
    },
  },

  api: {
    logo: '/img/logo-256.png',
    sources: [{ title: 'Lidarr V1 API', slug: 'v1', url: 'https://raw.githubusercontent.com/Lidarr/Lidarr/develop/src/Lidarr.Api.V1/openapi.json' }],
  },
};
