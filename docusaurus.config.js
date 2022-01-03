const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Silverside Down',
  tagline: 'Crypto & DeFi Basics',
  url: 'https://silversidedown.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'jacksmedia', // Usually your GitHub org/user name.
  projectName: 'silversidedown', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: false,
      defaultMode: 'dark',
      switchConfig: {
        darkIcon: '🦇',
        lightIcon: '🦢',
      },
    },
    navbar: {
      title: 'Silverside Down',
      logo: {
        alt: 'Silverside Down Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jacksmedia/guide1',
          label: 'Code Of This',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '📑 Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '📝 Long Form',
          items: [
            {
              label: 'Deep Dive into Blockchains',
              to: '/blog',
            },
            {
              label: 'Code for this Site on GitHub',
              href: 'https://github.com/jacksmedia/guide1',
            },
          ],
        },
        {
          title: '🤳 Sosh',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/J4cksRvn',
            },
          ],
        },
      ],
      copyright: `Any advice found on this website is of a logistical nature. No content herein constitutes financial advice.<br/>Copyright © ${new Date().getFullYear()} Jacks Media, LLC by J4cks.eth<br/><br/>Tips and ☕️🪙 donations sincerely appreciated.<br/>$EGLD: erd159mypt4myss3mqrs89ft0hjeacffks2690gq9u3mlh73m9sh0w5s09eqhh<br/>$RVN: RDhE9ZEEcRn38x5tQiYvv9gT7MXfwL82By<br/>$BTC: bc1q3jmlqvpkta0jywy87edd97v9yu7jv74xu0fhy4`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jacksmedia/guide1',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jacksmedia/guide1',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
