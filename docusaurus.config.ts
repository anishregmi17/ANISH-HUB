import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Anish",
  tagline: "PHP & Laravel Tutorials - From Basics to Advanced",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "ANISH HUB",
      items: [
        {
          type: "docSidebar",
          sidebarId: "htmlSidebar",
          position: "left",
          label: "HTML",
        },
        {
          type: "docSidebar",
          sidebarId: "cssSidebar",
          position: "left",
          label: "CSS",
        },
        {
          type: "docSidebar",
          sidebarId: "tailwindSidebar",
          position: "left",
          label: "Tailwind",
        },
        {
          type: "docSidebar",
          sidebarId: "phpSidebar",
          position: "left",
          label: "PHP",
        },
        {
          type: "docSidebar",
          sidebarId: "laravelSidebar",
          position: "left",
          label: "Laravel",
        },
        {
          type: "docSidebar",
          sidebarId: "filamentSidebar",
          position: "left",
          label: "Filament",
        },
        {
          type: "docSidebar",
          sidebarId: "gitSidebar",
          position: "left",
          label: "Git & GitHub",
        },
        {
          type: "docSidebar",
          sidebarId: "dockerSidebar",
          position: "left",
          label: "Docker",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/anishregmi17",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/anishregmi17",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/anish-regmi-458b66276",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()}<br/>Anish Regmi`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
