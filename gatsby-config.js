module.exports = {
  siteMetadata: {
    title: 'fahmiirsyd',
    siteUrl: `https://fahmirsyd.netlify.com/`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "d9oanquq4322",
        accessToken: "a291a9e2805c04254ac9f86baa03aab73d12b2752ff6c9a2438d5c39164e0e44"
      }
    },
    `gatsby-plugin-react-helmet`,
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
        icon: 'src/images/fahmiirsyd-icon.png'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
