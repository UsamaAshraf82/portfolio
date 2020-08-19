module.exports = {
  siteMetadata: {
    title: 'Muhammad Usama Ashraf Portfolio',
    author: 'Muhammad Usama Ashraf',
    description: 'Muhammad Usama Ashraf Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Muhammad Usama Ashraf Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/laptop-code.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
