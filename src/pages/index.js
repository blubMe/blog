import React from 'react'
import { Link,graphql } from 'gatsby'

import {Heroku,TitleSub3,Post} from '../data/cssAPI'
import Layout from '../components/layout'

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC })
      {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              excerpt
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
  return (
    <Layout style={{paddingTop: 0}}>
      <Heroku>
        <img src="/images/logome.png" alt="fahmiirsyd-banner"/>
        <div>
        <span role="img" aria-label="hands">👋</span><p>I'm fahmi, a frontend web developer based in Banyuwangi and currently stay in Yogyakarta.</p>
        </div>
      </Heroku>
      <TitleSub3>
        Recent articles
      </TitleSub3>
        {ql.edges.map(({node: n}) => (
        <Post key={n.id}>
          <Link to={n.fields.slug}>
            <h2>{`${n.frontmatter.title}`}</h2>
          </Link>
          <p>{n.frontmatter.excerpt}</p>
          <span>{n.frontmatter.date}</span>
        </Post>
      ))}
    </Layout>
  )
}

export default IndexPage
