import React from 'react'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"

import { HeaderPost } from '../components/header'
import Layout from '../components/layout'
import {Article,ArticleContent,PostImg} from '../data/cssAPI'

export default ({data}) => {
    const post = data.markdownRemark
    const dateToday = new Date()
    const dateLate = new Date(post.frontmatter.date)
    const isOldPost = (dateToday - dateLate) / (1000 * 3600 * 24 * 365) > 1;
    if(!data) return null
    return (
        <Layout>
            <HeaderPost siteTitle={data.site.siteMetadata.title}/>
            <Helmet>
              <title>{`${post.frontmatter.title}`}</title>
              <meta name="description" content={post.excerpt} />
              <meta property="og:title" content={post.frontmatter.title} />
              <meta property="og:description" content={post.excerpt} />
            </Helmet>
            {/* <img src={post.frontmatter.image}/> */}
            <PostImg style={{backgroundImage: `url(${post.frontmatter.image})`}}/>
            <Article>
              <h1>{post.frontmatter.title}</h1>
              <span>{`By fahmi on ${post.frontmatter.date} - ${post.timeToRead} min read`}</span>
              {isOldPost ? (
                <div>
                  This post is over a year old. Some of the content may be out of
                  date.
                </div>
              ) : null}
              <ArticleContent dangerouslySetInnerHTML={{ __html: post.html}} />
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
      timeToRead
      frontmatter {
        image
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }`
