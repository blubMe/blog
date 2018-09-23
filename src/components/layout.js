import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Footer from '../components/footer'
import { Root,Container } from '../data/cssAPI'
import './global.css'

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
            { property: 'fb:app_id', content: '1987400798047726'},
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@alexjpate' },
            { name: 'twitter:creator', content: '@alexjpate' },
            { name: 'twitter:image', content: '/images/fahmiirsyd-logo.png' }
          ]}
        >
          <html lang="en" />
          <base target="_blank" href="/" />
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
