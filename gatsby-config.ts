import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `XiaoXian - Home`,
    siteTitleAlt: `XiaoXian - Home`,
    siteHeadline: `XiaoXian - Home`,
    siteUrl: `https://xiaoxian.org`,
    siteDescription: `XiaoXianHW Personal Homepage`,
    siteImage: `/banner.jpg`,
    siteLanguage: `zh`,
    author: `@XiaoXianHW`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `XiaoXian - Home`,
        short_name: `Darf`,
        description: `XiaoXianHW Personal Homepage`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons:[]
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
