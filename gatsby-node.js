const path = require(`path`);
const { createRemoteFileNode } = require('gatsby-source-filesystem');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type EventJson implements Node {
      presenter: StrapiEventPresenter!
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
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
  `);
  result.data.allStrapiPresentation.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/PresentationPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });
  result.data.allStrapiPresenter.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/PresenterPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });
};

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   store,
//   cache,
//   createNodeId,
// }) => {
//   if (node.internal.type === "StrapiAboutPage") {
//     if (node.Content !== null && node.Content.length) {
//       let contentImages = [];
//       for (let i = 0, len = node.Content.length; i < len; i++) {
//         const block = node.Content[i];
//         const blockImage = {};
//         if (
//           block.strapi_component === "layout.2-column-section" &&
//           block.image !== null //&&
//           // block.images.length
//         ) {
//           const fileNode = await createRemoteFileNode({
//             url: `${process.env.GATSBY_STRAPI_URL}${block.image.url}`, // string that points to the URL of the image
//             parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//             createNode, // helper function in gatsby-node to generate the node
//             createNodeId, // helper function in gatsby-node to generate the node id
//             cache, // Gatsby's cache
//             store, // Gatsby's Redux store
//           });
//           console.log(fileNode)
//           blockImage.image = fileNode ? { localFile___NODE: fileNode.id } : {};
//           // for (let j = 0, len2 = block.images.length; j < len2; j++) {
//           //   let fileNode = await createRemoteFileNode({
//           //     url: `${CMS_URL}${block.images[j].url}`, // string that points to the URL of the image
//           //     parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//           //     createNode, // helper function in gatsby-node to generate the node
//           //     createNodeId, // helper function in gatsby-node to generate the node id
//           //     cache, // Gatsby's cache
//           //     store, // Gatsby's Redux store
//           //   });
//           //   blockImages.images.push(
//           //     fileNode ? { localFile___NODE: fileNode.id } : {}
//           //   );
//           // }
//         }
//         contentImages.push(blockImage);
//       }
//       node.contentImages = contentImages;
//     }
//   }
// };
