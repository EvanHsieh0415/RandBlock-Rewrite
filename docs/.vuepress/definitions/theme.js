import { defaultTheme } from "@vuepress/theme-default";

/** @type {defaultTheme} */
const theme = defaultTheme({
  logo: "/images/pack-icon.png",
  logoAlt: "",

  colorMode: "dark",
  colorModeSwitch: true,

  repo: "Mango-Minecraft-Project/RandBlock-Rewrite",
  editLinkPattern: ":repo/edit/:branch/:path",

  lastUpdated: true,
  contributors: true,

  locales: {
    "/": {
      selectLanguageName: "English",
      navbar: [
        { text: "Discord", link: "https://evanhsieh0415.github.io/links/discord.html" },
        {
          text: "Original Modpack Information",
          children: [{ text: "CurseForge", link: "https://www.curseforge.com/minecraft/modpacks/randblock" }],
        },
      ],
    },
    "/zh-tw/": {
      selectLanguageName: "Traditional Chinese（台灣正體）",
      navbar: [
        { text: "Discord", link: "https://evanhsieh0415.github.io/links/discord.html" },
        {
          text: "原始模組包資訊",
          children: [
            { text: "MC 百科", link: "https://www.mcmod.cn/modpack/768.html" },
            { text: "CurseForge", link: "https://www.curseforge.com/minecraft/modpacks/randblock" },
          ],
        },
      ],
      
      editLinkText: "在 GitHub 編輯此頁面",
      lastUpdatedText: "最後更新",
      contributorsText: "作者",
      backToHome: "返回首頁",
      openInNewWindow: "在新視窗中開啟",
      toggleColorMode: "切換色彩模式",
      toggleSidebar: "切換選單列",
      tip: "提示",
      warning: "注意",
      danger: "警告",
      notFound: ["這個頁面不存在"],
      selectLanguageText: "選擇語言",
    },
  },
})

export default theme