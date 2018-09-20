import React from 'react'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"

import config from '../../data/site'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        excerpt
      }
    }
  }`

export default ({data}) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Helmet>
              <title>{`${config.siteTitle} | ${post.frontmatter.title}`}</title>
              <meta name="description" content={post.frontmatter.excerpt} />
              <meta property="og:title" content={post.frontmatter.title} />
              <meta property="og:description" content={post.frontmatter.excerpt} />
            </Helmet>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html}} />
        </Layout>
    )
}