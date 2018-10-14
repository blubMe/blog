import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Footer from './footer'
import { Root } from '../data/cssAPI'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Root>
        <Helmet
          title={data.site.siteMetadata.title}
        >
          <html lang="en" />
          <base target="_blank" href="/" />
          <meta name="description" content="my exclusive blog created with ❤️" />
          <meta name="keywords" content="fahmiirsyd" />
          <meta name="image" content="/images/fahmiirsyd-logo.png" />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="copyright" content="fahmiirsyd" />
          <meta name="url" content="https://fahmiirsyd.com" />
          <meta name="identifier-URL" content="https://fahmiirsyd.com"/>
          <meta name="rating" content="General" />
          <meta name="twitter:card" content="summary_large-image" />
          <meta name="twitter:site" content="@fahmiirsyadk" />
          <meta name="twitter:creator" content="fahmiirsyadk" />
          <meta name="twitter:image" content="/images/fahmiirsyd-logo.png" />
          <meta name="og:region" content="ID"/>
          <meta property="og:title" content="fahmiirsyd" />
          <meta property="og:description" content="my exclusive blog created with ❤️" />
          <meta property="og:image" content="/images/fahmiirsyd-logo.png" />
          <meta property="og:type" content="article" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta content="yes" name="apple-touch-fullscreen" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" content="EKB6SPfHL3fqp5rX6Kye6soq4SuWS1YtYsFnY2TRifA" />
          <meta name="nightowl" content="https://goo.gl/SdfcZp" />
        </Helmet>
          {children}
        <Footer />
      </Root>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
