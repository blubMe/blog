import React from 'react'
import { Link,graphql } from 'gatsby'

import {Heroku} from '../data/cssAPI'
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
            }
            excerpt
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
        <img src="/images/logome.png"></img>
        <div>
          <p>I'm fahmi, a frontend web developer based in Banyuwangi and currently stay in Yogyakarta.</p>
        </div>
      </Heroku>
      <span>Recent articles {ql.totalCount}</span>
        {ql.edges.map(({node: n}) => (
        <div key={n.id}>
          <Link to={n.fields.slug}>
            <h2>{`${n.frontmatter.title}`}</h2>
          </Link>
          <span>{n.frontmatter.date}</span>
          <p>{n.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
