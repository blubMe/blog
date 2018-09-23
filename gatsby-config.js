module.exports = {
  siteMetadata: {
    title: 'fahmiirsyd',
    siteUrl: `https://thirsty-goldberg-be4801.netlify.com/`
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
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
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`
      }
    },
    {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        appId: "1987400798047726",
        includeInDevelopment: false,
        debug: false,
        // Can select your language, default will load english
        language: "en_US",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-82449461-2",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/404"],
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-WF4S8W6",
      },
    }
  ],
}
