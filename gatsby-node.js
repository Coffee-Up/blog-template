const path = require(`path`);

let mainMenuSettingsPrismic;
let globalSettingsPrismic;

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
     prismicMainMenu {
       data {
        container_border__color
        container_border__width
        container_width
        container_height

        logo_themes_switch
        light_container_background__color
        dark_container_background__color
       }
     }
     prismicGlobalSettings {
      data {
       light_background__color
       dark_background__color
      }
     }
    }
  `);
  
  mainMenuSettingsPrismic = result.data.prismicMainMenu.data; 
  globalSettingsPrismic = result.data.prismicGlobalSettings.data; 

  result.data.allPrismicArticle.edges.forEach(({ node }) => {
   createPage({
    path: `/post/${node.uid}`,
    component: path.resolve(`./src/pages/templates/ArticleTemplate.js`),
    context: {
     uid: node.uid,
    }
   });
  });

};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
// TODO (perf) We are doing unecessary operations, we need to create context ONLY
// for Layout component
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      mainMenuFromNode: mainMenuSettingsPrismic,
      globalSettingsFromNode: globalSettingsPrismic,
    },
  })
}
