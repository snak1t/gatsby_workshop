const chalk = require('chalk')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  const { edges: posts } = data.allWordpressPost
  for (const { node } of posts) {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
      },
    })
    console.log(chalk.bgBlue(`Page ${node.slug} has been created`))
  }
}
