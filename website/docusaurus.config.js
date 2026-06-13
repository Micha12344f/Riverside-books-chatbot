// @ts-check

const config = {
  title: "Riverside Books Chatbot",
  tagline: "A documented FAQ chatbot with local semantic retrieval and visible ranking logic.",
  favicon: "img/favicon.ico",

  url: "http://localhost",
  baseUrl: "/",

  organizationName: "Micha12344f",
  projectName: "Riverside-chatbot",

  onBrokenLinks: "warn",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs/docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Riverside Books Chatbot",
      items: [
        { to: "/", label: "Home", position: "left" },
        { to: "/docs/overview", label: "Docs", position: "left" },
        { href: "https://github.com/Micha12344f/Riverside-chatbot", label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Overview", to: "/docs/overview" },
            { label: "Code Guide", to: "/docs/source-guide" },
            { label: "Notebook Guide", to: "/docs/notebooks" },
          ],
        },
        {
          title: "Project",
          items: [
            { label: "Testing", to: "/docs/testing" },
            { label: "Scaling Plan", to: "/docs/scaling" },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Riverside Books Chatbot`,
    },
  },
};

module.exports = config;
