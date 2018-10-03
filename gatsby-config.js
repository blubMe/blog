module.exports = {
  siteMetadata: {
    title: 'fahmiirsyd',
    siteUrl: `https://fahmirsyd.netlify.com/`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        pure: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'fahmiirsyd',
        short_name: 'fahmiirsyd',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/fahmiirsyd-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/assets`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`
  ],
}
