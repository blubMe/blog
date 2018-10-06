import React from 'react'
import { Link,graphql } from 'gatsby'

import {Container,Heroku,TitleSub3,PostMain,Post,PostTitle,PostThumbnail,Aside} from '../data/cssAPI'
import Layout from '../components/layout'
import Header from '../components/header'

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC})
      {
        totalCount
        edges {
          node {
            id
            timeToRead
            excerpt(pruneLength: 110)
            frontmatter {
              image
              title
              date(fromNow: true)
            }
            fields {
              slug
            }
          }
        }
      }
    }
`

const IndexPage = ({data}) => {
  const ql = data.allMarkdownRemark
  const site = data.site.siteMetadata.title
  return (
    <Layout style={{paddingTop: 0}}>
      <Container>
        <Header siteTitle={site} />
        <Heroku>
          <img src="/images/logome.png" alt="fahmiirsyd-banner"/>
          <div>
          <span role="img" aria-label="wave">👋</span><p>I'm fahmi, a frontend web developer based in Banyuwangi and currently stay in Yogyakarta.</p>
          </div>
        </Heroku>
        <TitleSub3>
          Recent articles
        </TitleSub3>
        <div style={{display: 'flex'}}>
        <PostMain>
          { ql.edges.map(({node: n}) => (
                <Post key={n.id}>
                  <PostTitle>
                    <Link to={n.fields.slug}>
                      <h2>{`${n.frontmatter.title}`}</h2>
                    </Link>
                    <Link to={n.fields.slug}>
                      <p>{n.excerpt}</p>
                    </Link>
                    <span>{n.frontmatter.date} - {n.timeToRead} min read</span>
                  </PostTitle>
                  <PostThumbnail>
                    <img src={n.frontmatter.image} alt=""/>
                  </PostThumbnail>
                </Post>
              ))
          }
        </PostMain>
        <Aside>
          {/* <AsideItem>
            <AsideItemHeader>
              <h3>React 16 Course</h3>
            </AsideItemHeader>
            <AsideItemContent />
          </AsideItem>
          <AsideItem>
            <AsideItemHeader>
              <h3>Learn from scratch</h3>
            </AsideItemHeader>
            <AsideItemContent />
          </AsideItem>
          <AsideItem>
            <AsideItemHeader>
              <h3>Learn from scratch</h3>
            </AsideItemHeader>
            <AsideItemContent />
          </AsideItem> */}
        </Aside>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
