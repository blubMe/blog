/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
require('dotenv').config()
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
        // console.log(createFilePath({ node, getNode, basePath: `pages` }))
    }
}

exports.createPages = ({graphql,actions}) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                title
                            }
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `).then(result => {
            const post = result.data.allMarkdownRemark.edges
            post.forEach(({ node },index) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        slug: node.fields.slug,
                        prev: index === 0 ? null : post[index - 1].node,
                        next: index === (post.length - 1) ? null : post[index + 1].node
                    },
                })
            })
            resolve()
        })
    })
}