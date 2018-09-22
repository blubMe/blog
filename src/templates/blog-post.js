import React from 'react'
import { graphql,Link } from 'gatsby'
import Helmet from "react-helmet"

import { HeaderPost } from '../components/header'
import Layout from '../components/layout'
import {Article} from '../data/cssAPI'

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        excerpt
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }`

export default ({data, pageContext}) => {
    const post = data.markdownRemark
    const {prev,next} = pageContext
    return (
        <Layout>
            <HeaderPost siteTitle={data.site.siteMetadata.title}/>
            <Helmet>
              <title>{`${post.frontmatter.title}`}</title>
              <meta name="description" content={post.frontmatter.excerpt} />
              <meta property="og:title" content={post.frontmatter.title} />
              <meta property="og:description" content={post.frontmatter.excerpt} />
            </Helmet>
            <Article style={{paddingTop: 64}}>
              <h1>{post.frontmatter.title}</h1>
              <span>{post.frontmatter.date}</span>
              <article dangerouslySetInnerHTML={{ __html: post.html}} />
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
            </Article>
        </Layout>
    )
}