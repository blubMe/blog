import React from 'react'
import { graphql } from 'gatsby'

import {Container,TitleSub3,PostWrapper,PostMain} from '../data/cssAPI'
import Layout from '../components/layout'
import HeaderBase from '../components/header'
import PostListing from './components/postlisting'
import PostHero from './components/posthero'

const IndexPage = ({data}) => {
  return (
    <Layout style={{paddingTop: 0}}>
      <Container>
        <HeaderBase siteTitle={data.site.siteMetadata.title}/>
        <PostHero />
        <TitleSub3>
          Recent articles
        </TitleSub3>
        <PostWrapper>
        <PostMain>
          {data.allContentfulBlogPost.edges.map(({node}) => (
            <PostListing key={node.id} post={node} title={node.title} excerpt={node.article.childMarkdownRemark.excerpt} slug={node.slug} img={node.header.fluid.srcWebp} imgset={node.header.fluid.srcSetWebp} imgid={node.header.id} timeToRead={node.article.childMarkdownRemark.timeToRead} date={node.createdAt}/>
          )) }
        </PostMain>
        </PostWrapper>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          article {
            childMarkdownRemark {
              html
              timeToRead
              excerpt(pruneLength: 110)
            }
          }
          slug
          header {
            id
            fluid {
              srcWebp
              srcSetWebp
            }
          }
          createdAt(fromNow: true)
        }
      }
    }
    }
`