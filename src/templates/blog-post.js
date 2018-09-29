import React from 'react'
import { graphql,Link } from 'gatsby'
import Helmet from "react-helmet"

import { HeaderPost } from '../components/header'
import Layout from '../components/layout'
import {Article,ArticleContent,ArticleFooter} from '../data/cssAPI'

export default ({data, pageContext}) => {
    const post = data.markdownRemark
    const dateToday = new Date()
    const dateLate = new Date(post.frontmatter.date)
    const isOldPost = (dateToday - dateLate) / (1000 * 3600 * 24 * 365) > 1;
    const {prev,next} = pageContext
    return (
        <Layout>
            <HeaderPost siteTitle={data.site.siteMetadata.title}/>
            <Helmet>
              <title>{`${post.frontmatter.title}`}</title>
              <meta name="description" content={post.excerpt} />
              <meta property="og:title" content={post.frontmatter.title} />
              <meta property="og:description" content={post.excerpt} />
            </Helmet>
            <Article>
              <h1>{post.frontmatter.title}</h1>
              <span>{`By fahmi on ${post.frontmatter.date}`}</span>
              {isOldPost ? (
                <div>
                  This post is over a year old. Some of the content may be out of
                  date.
                </div>
              ) : null}
              <ArticleContent dangerouslySetInnerHTML={{ __html: post.html}} />
              <ArticleFooter>
                <p>
                  {prev && (
                    <Link to={prev.fields.slug}>
                    ← Previous: {prev.frontmatter.title}
                    </Link>
                  )}
                </p>
                <p>
                  {next && (
                    <Link to={next.fields.slug}>
                      Next : {next.frontmatter.title} →
                    </Link>
                  )}
                </p>
              </ArticleFooter>
            </Article>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        tags
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }`
