module.exports = {
  siteMetadata: {
    title: 'Usama Ashraf Portfolio',
    description: 'A Personal Portfolio Website For Myself usamaashraf82',
    author: `usamaashraf82@live.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
        // icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
