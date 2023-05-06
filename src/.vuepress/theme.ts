import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, esNavbarConfig } from "./navbar";

export default hopeTheme({
  hostname: "https://docs.erpya.com",

  author: {
    name: "ERP Consultores y Asociados, C.A.",
    url: "https://erpya.com",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "https://github.com/erpcya/ademnpiere-landing-page",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  fullscreen: true,

  repoDisplay: false,

  docsDir: "src",

  locales: {
    "/": {
      navbar: enNavbarConfig,
      blog: {
        description: "ADempiere ERP Community",
        intro: "/about/",
        medias: {
          Gmail: "mailto:info@erpya.com",
          GitHub: "https://github.com/erpcya",
          Discord: "https://discord.gg/UWcyn7DEzV",
          Twitter: "https://twitter.com/erpcya",
        },
      },
    },
    "/es/": {
      navbar: esNavbarConfig,

      blog: {
        description:
          "VuePress project member, front-end developer, studying for a master's degree in theoretical physics",
        intro: "/es/about/",
        medias: {
          medias: {
            Gmail: "mailto:info@erpya.com",
            GitHub: "https://github.com/erpcya",
            Discord: "https://discord.gg/UWcyn7DEzV",
            Twitter: "https://twitter.com/erpcya",
          },
        },
      },
    },
  },

  displayFooter: true,
  copyright: "Copyright © 2022-present ERP Consultores y Asociados, C.A.",

  plugins: {
    blog: true,

    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://<to-be-defined>",
    // },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      mathjax: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icon/apple-touch-icon.png",
        statusBarColor: "white",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "ADempiere ERP Community",
        short_name: "ADempiere ERP",
        description: "ADempiere ERP, created by peoples like you",
        theme_color: "#5c92d1",
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Classification",
            short_name: "Classification",
            icons: [
              {
                src: "/assets/icon/category-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/category-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/category/",
            description: "Classification Group",
          },
          {
            name: "Label",
            short_name: "Label",
            icons: [
              {
                src: "/assets/icon/tag-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/tag-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/tag/",
            description: "Tag Grouping",
          },
          {
            name: "Timeline",
            short_name: "Timeline",
            icons: [
              {
                src: "/assets/icon/timeline-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/timeline-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/timeline/",
            description: "Timeline Article List",
          },
          {
            name: "Self Introduction",
            short_name: "Self Introduction",
            icons: [
              {
                src: "/assets/icon/about-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/about-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/about/",
            description: "Self Introduction",
          },
        ],
      },
    },
  },
});
