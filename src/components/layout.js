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
          meta={[
            { name: 'description', content: 'my exclusive blog created with ❤️' },
            { name: 'keywords', content: 'fahmiirsyd, programming' },
            { name: 'image', content: '/images/fahmiirsyd-logo.png'},
            { property: 'og:title', content: 'fahmiirsyd'},
            { property: 'og:description', content: 'my exclusive blog created with ❤️'},
            { property: 'og:image', content: '/images/fahmiirsyd-logo.png'},
            { property: 'og:type', content: 'article'},
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@alexjpate' },
            { name: 'twitter:creator', content: '@alexjpate' },
            { name: 'twitter:image', content: '/images/fahmiirsyd-logo.png' }
          ]}
        >
          <html lang="en" />
          <base target="_blank" href="/" />
          <meta name="google-site-verification" content="7HICaoorQ4Nd0P5weegiDs1eb-qnes48NYNe0DvOnFY" />
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
