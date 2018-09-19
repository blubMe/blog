import React from 'react'
import { Link,graphql } from 'gatsby'

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
  console.log(data)
  const ql = data.allMarkdownRemark
  return (
    <Layout>
      <div style={{
        padding: 10,
        borderRadius: 3,
        borderColor: 'blue',
        border: 1
      }}>
        <span>{ql.totalCount}</span>
      {ql.edges.map(({node: n}) => (
        <div key={n.id}>
          <Link to={n.fields.slug}>
            <h2>{`${n.frontmatter.title}`}</h2>
          </Link>
          <span>{n.frontmatter.date}</span>
          <p>{n.excerpt}</p>
        </div>
      ))}
      </div>
    </Layout>
  )
}

export default IndexPage
