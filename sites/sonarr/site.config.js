export default {
  name: 'Sonarr',
  title: 'Sonarr - Smart PVR for Usenet and Torrents',
  description: 'Sonarr is an internet PVR for Usenet and Torrents. It monitors RSS feeds for new episodes of your favorite shows and grabs, sorts and renames them.',
  url: 'https://sonarr.tv',
  domain: 'Sonarr.tv',
  github: 'https://github.com/Sonarr/Sonarr',
  accent: '#35c5f4',
  logo: '/img/logo.png',
  favicon: '/img/favicon.ico',
  port: 8989,

  hero: {
    title: 'Sonarr is an internet PVR for Usenet and Torrents.',
    lead: 'It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.',
    image: '/img/slider/seriesdetails.png',
    alt: 'Sonarr series details page',
  },

  features: [
    { title: 'Calendar', text: 'See all your upcoming episodes in one convenient location.', image: '/img/features/calendar.png', wide: true },
    { title: 'Manual Search', text: 'Find all the releases, choose the one you want and send it right to your download client.', image: '/img/features/manualsearch.png' },
    { title: 'Automatic Failed Download Handling', text: 'Password protected releases, missing repair blocks or virtually any other reason? Sonarr will automatically block the release and try another one until it finds one that works.', image: '/img/features/blocklist.png' },
    { title: 'Quality Profiles', text: 'Fully customizable quality profiles, and notifications for the services you already use.', image: '/img/slider/qualityprofile.png', wide: true },
    { title: 'Multiple Series Views', text: 'Browse your series as posters, an overview or a table.', image: '/img/slider/posters.png', wide: true },
    { title: 'Built-in Updater', text: "See what's new without leaving the comfort of the app.", image: '/img/slider/updates2.png' },
  ],

  downloads: [
    { id: 'windows', label: 'Windows', icon: 'windows', content: 'downloads/windows' },
    {
      id: 'linux',
      label: 'Linux',
      icon: 'si:linux',
      tabs: [
        { id: 'debian', label: 'Debian / Ubuntu', icon: 'si:debian', content: 'downloads/linux-debian', aliases: ['ubuntu'] },
        { id: 'archlinux', label: 'Arch Linux', icon: 'si:archlinux', content: 'downloads/linux-archlinux' },
        { id: 'gentoo', label: 'Gentoo', icon: 'si:gentoo', content: 'downloads/linux-gentoo' },
        { id: 'freebsd', label: 'FreeBSD', icon: 'si:freebsd', content: 'downloads/linux-freebsd' },
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
    { id: 'other', label: 'Others', icon: 'ellipsis', content: 'downloads/other' },
  ],

  support: [
    { title: 'Forums', text: 'Talk to Sonarr developers and other users, we are here to help.', icon: 'users', href: 'https://forums.sonarr.tv' },
    { title: 'Wiki', text: 'Check out the FAQ, API documentation and other guides.', icon: 'book-open', href: 'https://wiki.sonarr.tv' },
    { title: 'Discord', text: 'Join our Discord server for a chat.', icon: 'si:discord', href: 'https://discord.sonarr.tv' },
    { title: 'IRC Channel', text: 'Join <code>#sonarr</code> on irc.libera.chat for a chat.', icon: 'message-circle', href: 'https://web.libera.chat/?channels=#sonarr' },
    { title: 'GitHub Issues', text: 'Track bugs and features for the things that matter to you.', icon: 'si:github', href: 'https://github.com/Sonarr/Sonarr/issues' },
    { title: 'Subreddit', text: 'Discuss Sonarr and talk to other users.', icon: 'si:reddit', href: 'https://www.reddit.com/r/sonarr' },
    { title: 'X (Twitter)', text: 'News, updates and anything else that might come up.', icon: 'si:x', href: 'https://twitter.com/sonarrtv' },
  ],

  donate: {
    links: [{ label: 'Open Collective', icon: 'si:opencollective', href: 'https://opencollective.com/sonarr' }],
    bitcoin: { address: '3AH2HQxUWhm42Jx7CEBsw1q2cPBoYuBMXT', qr: '/img/bitcoinqr.png' },
  },

  api: {
    logo: '/img/logo-256.png',
    sources: [
      { title: 'Sonarr V3 API', slug: 'v3', url: 'https://raw.githubusercontent.com/Sonarr/Sonarr/develop/src/Sonarr.Api.V3/openapi.json' },
      { title: 'Sonarr V5 API', slug: 'v5', url: 'https://raw.githubusercontent.com/Sonarr/Sonarr/v5-develop/src/Sonarr.Api.V5/openapi.json' },
    ],
  },

  footerLinks: [{ label: 'Privacy', href: '/privacy' }],
};
