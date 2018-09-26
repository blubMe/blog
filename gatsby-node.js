/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

exports.createPages = ({graphql,actions}) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark(sort: { fields: [frontmatter___date]}) {
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
                const next = index === 0 ? null : post[index - 1].node
                const prev = index === post.length - 1 ? null : post[index + 1].node
                createPage({
                    path: node.fields.slug,
                    component: blogPostTemplate,
                    context: {
                        slug: node.fields.slug,
                        prev,
                        next
                    },
                })
            })
            resolve()
        })
    })
}