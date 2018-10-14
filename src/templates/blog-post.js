import React from 'react'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"

import { HeaderPost } from '../components/header'
import Layout from '../components/layout'
import ArticlePost from './modules/article'

export default ({data}) => {
    const post = data.contentfulBlogPost
    const postArticle = post.article.childMarkdownRemark
    const dateToday = new Date()
    const dateLate = new Date(post.createAt)
    const isOldPost = (dateToday - dateLate) / (1000 * 3600 * 24 * 365) > 1

    return (
        <Layout>
          <HeaderPost siteTitle={data.site.siteMetadata.title}/>
          <Helmet>
              <title>{`${post.title}`}</title>
              <meta name="description" content={postArticle.excerpt} />
              <meta property="og:title" content={post.title} />
              <meta property="og:description" content={postArticle.excerpt} />
          </Helmet>
          <ArticlePost key={post.id} data={post} old={isOldPost} img={post.header.fluid}/>
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
    contentfulBlogPost(slug: {eq: $slug}){
      title
      article{
        childMarkdownRemark {
          html
          excerpt
          timeToRead
        }
      }
      header {
        id
        fluid {
          srcWebp
          srcSetWebp
        }
      }
      slug
      id
      createdAt(formatString: "DD MMMM, YYYY")
    }
  }`
