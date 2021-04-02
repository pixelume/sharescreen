const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiPresentation {
        nodes {
          slug
        }
      }
      allStrapiPresenter {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.allStrapiPresentation.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/PresentationPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
  result.data.allStrapiPresenter.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/PresenterPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}