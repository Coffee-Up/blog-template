// const path = require(`path`);
// // templates
// const templateArticle = path.resolve(`./src/components/TemplateArticle.jsx`);

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   // PAGES ISOLATEURS
//   const articlesData = await graphql(`
//     {
//       allPrismicArticle {
//         edges {
//           node {
//             data {
//               titre {
//                 html
//                 raw
//                 text
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
// };
