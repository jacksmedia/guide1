const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Silverside Down',
  tagline: 'Get Your Start in Cryptocurrency',
  url: 'https://silversidedown.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
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
        alt: 'My Site Logo',
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
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Even More!',
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
          title: 'How To Build This Yourself',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Any advice found on this website is of a logistical nature. No content herein constitutes financial advice.<br/>Copyright © ${new Date().getFullYear()} Jacks Media, LLC.<br/><br/>Donate EGLD: erd159mypt4myss3mqrs89ft0hjeacffks2690gq9u3mlh73m9sh0w5s09eqhh<br/>Donate RVN: RDhE9ZEEcRn38x5tQiYvv9gT7MXfwL82By<br/>Donate BTC: bc1q3jmlqvpkta0jywy87edd97v9yu7jv74xu0fhy4`,
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
