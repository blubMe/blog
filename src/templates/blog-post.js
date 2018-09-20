import React from 'react'
import { graphql,Link } from 'gatsby'
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

export default ({data, pageContext}) => {
    const post = data.markdownRemark
    console.log(pageContext)
    const {prev,next} = pageContext
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
            <p>
              {prev && (
                <Link to={prev.fields.slug}>
                  Previous: {prev.frontmatter.title}
                </Link>
              )}
            </p>
            <p>
              {next && (
                <Link to={next.fields.slug}>
                  Next: {next.frontmatter.title}
                </Link>
              )}
            </p>
        </Layout>
    )
}