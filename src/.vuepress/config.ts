import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  
  base: "/",
  host: "localhost",
  port: 8082,

  lang: "hu-HU",
  title: "School of Business",
  description: "Digitális tudás vezet a sikerhez.",
  head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
	],

  bundler: viteBundler({
    viteOptions: {
      server: { strictPort: true },
      resolve: {
        alias: [
          // Az ikonbővítmény CommonJS fájlokra mutató importokat generál.
          // A csomag ESM belépési pontja ugyanazokat az ikonokat exportálja,
          // és a Vite fejlesztői szervere is közvetlenül be tudja tölteni.
          {
            find: /(\/@fortawesome\/free-(?:solid|regular|brands)-svg-icons)\/fa[^/]+\.js$/,
            replacement: "$1/index.mjs",
          },
        ],
      },
    },
  }),
  theme,
  plugins: [
    // A téma jelenlegi verziójának ellenőrzője nem ismeri a backToTop opciót.
    // A bővítményt még a hookok regisztrálása előtt eltávolítjuk.
    (app) => {
      const index = app.pluginApi.plugins.findIndex(
        (plugin) => plugin.name === "@vuepress/plugin-back-to-top",
      );
      if (index !== -1) app.pluginApi.plugins.splice(index, 1);
      return { name: "sob-disable-back-to-top" };
    },
  ],
});
