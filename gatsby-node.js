const path = require(`path`);

let prismicHomepage = "";

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allPrismicPageWeb {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  prismicHomepage = result.data.allPrismicPageWeb.edges.filter(
    ({ node }) => node.uid === "homepage"
  );

  result.data.allPrismicPageWeb.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(`./src/pages/TemplatePageWeb.js`),
      context: {
        uid: node.uid,
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path === "/") {
    deletePage(page);
    createPage({
      ...page,
      component: path.resolve(`./src/pages/TemplatePageWeb.js`),
      context: {
        uid: "homepage",
        homepageData: prismicHomepage,
      },
    });
  }
};
