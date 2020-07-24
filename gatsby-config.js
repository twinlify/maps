module.exports = {
  siteMetadata: {
    title: `Twinlify`,
    description: `Twinlify websites and demos`,
    author: `@chrisdugne`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `twinlify.com`,
        short_name: `www`,
        start_url: `/`,
        background_color: `#47b23b`,
        theme_color: `#47b23b`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
