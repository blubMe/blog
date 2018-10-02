import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import { Root,Container } from '../data/cssAPI'

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
          <meta name="twitter:card" content="summary_large-image" />
          <meta name="twitter:site" content="@fahmiirsyadk" />
          <meta name="twitter:creator" content="fahmiirsyadk" />
          <meta name="twitter:image" content="/images/fahmiirsyd-logo.png" />
          <meta property="og:title" content="fahmiirsyd" />
          <meta property="og:description" content="my exclusive blog created with ❤️" />
          <meta property="og:image" content="/images/fahmiirsyd-logo.png" />
          <meta property="og:type" content="article" />
          <meta name="google-site-verification" content="EKB6SPfHL3fqp5rX6Kye6soq4SuWS1YtYsFnY2TRifA" />
        </Helmet>
        <Container>
          {children}
        </Container>
        <Footer />
      </Root>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
