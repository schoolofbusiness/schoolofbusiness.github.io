import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const sitePassword = process.env.SITE_PASSWORD;
if (!sitePassword) throw new Error("A SITE_PASSWORD környezeti változó nincs beállítva.");

export default hopeTheme({
  hostname: "https://schoolofbusiness.github.io",

  author: {
    name: "Teacher",
  },

  logo: "/logo.png",
  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "2023/2024. School of Business",

  displayFooter: true,
  editLink: false,
  contributors: false,
  prevLink: false,
  nextLink: false,
  print: false,
  copyright: false,
  pageInfo: false,
  darkmode: "enable",

  encrypt: {
    config: {
      "/": [sitePassword]
    },
  },

  encryptLocales: {
    placeholder: "Adja meg a jelszót",
    remember: "Jelszó megjegyzése",
    errorHint: "Kérjük, adja meg a helyes jelszót!"
  },

  metaLocales: {
    toc: "Ezen a lapon"
  },

  // A korábbi mdEnhance beállítások az új verzióban ide kerültek.
  markdown: {
    highlighter: {
      type: "shiki",
      langAlias: { terminal: "bash" },
    },
    align: true,
    attrs: true,
    chartjs: true,
    codeTabs: true,
    demo: {
      codepen: false,
      jsfiddle: true,
    },
    echarts: true,
    figure: true,
    flowchart: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    math: { type: "katex" },
    mark: true,
    mermaid: true,
    playground: {
      presets: ["ts", "vue"],
    },
    revealjs: {
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

  plugins: {
    copyright: false,
    // A helyi mappa Git-előzmények nélkül is futtatható.
    git: false,
    icon: {
      type: "fontawesome",
      assets: "fontawesome-with-brands",
      offline: true,
    },
  },
});
