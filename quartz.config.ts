import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "💎 Unser Quartz Test",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "de-DE",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      // set to false, this fetches specified fonts at build instead of downoading them from Google (CDN caching) for every user: 
      cdnCaching: false,
      typography: {
        // header: "Roboto Mono",
        header: "Roboto Mono",
        // body: "Roboto Mono",
        body: "Roboto",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          // BG, FS white
          light: "#faf8ff",
          // borders, FS deep purple
          lightgray: "#25215a",
          // heavier borders, graph links, FS  purple 50%
          gray: "#d7bfff",
          // body text, FS deep purple
          darkgray: "#25215a",
          // header text & icons, FS deep purple
          dark: "#25215a",
          // links, FS purple rain
          secondary: "#4500bd",
          // hover states & visited graph nodes, FS purple drizzle
          tertiary: "#660eff",
          // highlight: "rgba(143, 159, 169, 0.15)",
          // internal link background, highlighted text, highlighted lines of code, FS lilac
          highlight: "#E3D1FF",
        },
        darkMode: {
          // BG, FS deeper purple 125%
          light: "#1C1943",
          // borders, FS purple rain
          lightgray: "#4500bd",
          // heavier borders, graph links, FS lavender
          gray: "#D7BFFF",
          // body text, FS white lies
          darkgray: "#FAF8FF",
          // header text & icons, FS lavender
          dark: "#D7BFFF",
          // links, FS raspberry sorbet
          secondary: "#F19BD8",
          // hover states & visited graph nodes, FS Barbie
          tertiary: "#f8cdec",
          // internal link background, highlighted text, highlighted lines of code, FS purple rain
          // highlight: "rgba(143, 159, 169, 0.15)",
          highlight: "#4500bd",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
