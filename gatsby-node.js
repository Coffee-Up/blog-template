const path = require(`path`);

let prismicTheme;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allPrismicArticle {
       edges {
        node {
         uid
        }
       }
      }
      allPrismicPageWeb {
        edges {
          node {
            uid
          }
        }
      }
      prismicDarkTheme {
       data {
        main_color
        secondary_color
        background_color
       }
      }
      prismicLightTheme {
       data {
        main_color
        secondary_color
        background_color
       }
      }
    }
  `);

 prismicThemes  = {
  dark: result.data.prismicDarkTheme.data,
  light: result.data.prismicLightTheme.data
 }

  result.data.allPrismicArticle.edges.forEach(({ node }) => {
   createPage({
    path: `/post/${node.uid}`,
    component: path.resolve(`./src/pages/templates/ArticleTemplate.js`),
    context: {
     uid: node.uid,
     themes: prismicThemes
    }
   });
  });

  result.data.allPrismicPageWeb.edges.forEach(({ node }) => {
    if (!node.uid || node.uid === "homepage" || node.uid === "404") return;
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(`./src/pages/templates/PageWebTemplate.js`),
      context: {
       uid: node.uid,
       themes: prismicThemes
      }
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      themes: prismicThemes,
    },
  })
}
