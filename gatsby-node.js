exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/templates/BlogTemplate.js`)
  
    const result = await graphql(`
    {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          limit: 1000
        ) {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
      
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.nodes.forEach(node => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }