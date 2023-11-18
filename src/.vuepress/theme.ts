import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://schoolofbusiness.github.io",

  author: {
    name: "Teacher",
  },

  iconAssets: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
  ],

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
  backToTop: false,
  pageInfo: ["Category"],
  darkmode: "enable",

  encrypt: {
    config: {
      "/": ["School2324"]
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

  plugins: {    

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: false,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
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
  },
});
