import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import theme from "./definitions/theme";

export default defineUserConfig({
  base: "/RandBlock-Rewrite/",
  bundler: viteBundler(),
  head: [["meta", { charset: "utf-8" }]],
  theme,
  locales: {
    "/": {
      lang: "en-US",
      title: "RandBlock Rewrite",
      description: "A modpack for skyblock featuring randomly generated blocks.",
    },
    "/zh-tw/": {
      lang: "zh-TW",
      title: "隨機空島 重寫版",
      description: "一個以隨機生成方塊為主題的空島模組包。",
    },
  },
});
