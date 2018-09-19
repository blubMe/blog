import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'my exclusive blog created with ❤️' },
            { name: 'keywords', content: 'fahmiirsyd, programming' },
            { name: 'image', content: 'https://thirsty-goldberg-be4801.netlify.com/images/fahmiirsyd-logo.png'},
            { property: 'og:title', content: 'fahmiirsyd'},
            { property: 'og:description', content: 'my exclusive blog created with ❤️'},
            { property: 'og:image', content: 'https://thirsty-goldberg-be4801.netlify.com/images/fahmiirsyd-logo.png'},
            { property: 'og:type', content: 'article'}
          ]}
        >
          <html lang="en" />
          <base target="_blank" href="https://thirsty-goldberg-be4801.netlify.com" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
