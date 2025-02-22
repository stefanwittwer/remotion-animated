// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Remotion Animated',
  tagline: 'A delightful, declarative way to animate things in Remotion.',
  url: 'https://www.remotion-animated.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'stefanwittwer',
  projectName: 'remotion-animated',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Remotion Animated Logo',
          src: 'img/remotion-animated.svg',
        },
        title: 'Remotion Animated',
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
          },
          {
            href: 'https://github.com/stefanwittwer/remotion-animated/blob/main/LICENSE.md',
            label: 'License',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/remotion-animated',
            label: 'npm',
            position: 'right',
          },
          {
            href: 'https://github.com/stefanwittwer/remotion-animated',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Introduction', to: '/docs' },
              { label: 'Concept', to: '/docs/concept' },
              { label: 'Animated component', to: '/docs/animated-component' },
            ],
          },
          {
            title: 'Animations',
            items: [
              { label: 'Move', to: '/docs/animations/move' },
              { label: 'Scale', to: '/docs/animations/scale' },
              { label: 'Rotate', to: '/docs/animations/rotate' },
              { label: 'Fade', to: '/docs/animations/fade' },
              { label: 'Size', to: '/docs/animations/size' },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                to: 'https://www.github.com/stefanwittwer/remotion-animated',
              },
              {
                label: 'View package on npm',
                to: 'https://www.npmjs.com/package/remotion-animated',
              },
              {
                label: 'License',
                to: 'https://github.com/stefanwittwer/remotion-animated/blob/main/LICENSE.md',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} <a href="https://www.stefanwittwer.com" target="_blank">Stefan Wittwer</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
