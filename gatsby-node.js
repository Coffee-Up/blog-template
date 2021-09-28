const path = require(`path`);

let prismicThemes;

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
     
     prismicThemes {
      data {
       footer_nocssrule_transition

       menu_container_height
       menu_container_border__style
       menu_container_border__width

       dark_background_color
       dark_main_color
       dark_secondary_color
       dark_menu_color

       light_background_color
       light_cards_color
       light_main_color
       light_secondary_color
       light_menu_color
      }
     }    
    }
  `);

  prismicThemes  = result.data.prismicThemes.data; 
 
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

};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      themes: prismicThemes
    },
  })
}
