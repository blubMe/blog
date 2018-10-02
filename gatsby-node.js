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
            post.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: blogPostTemplate,
                    context: {
                        slug: node.fields.slug
                    },
                })
            })
            resolve()
        })
    })
}