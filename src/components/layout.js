import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import { Root,Container } from '../data/cssAPI'
import './global.css'
// import './layout.css'

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
            { property: 'fb:app_id', content: '1987400798047726'}
          ]}
        >
          <html lang="en" />
          <base target="_blank" href="/" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children}
        </Container>
      </Root>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
