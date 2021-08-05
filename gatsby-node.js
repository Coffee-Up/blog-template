const path = require(`path`);
// Ugly but I need It outside of createPages
let prismicHomepage;
let prismic404;

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
      allPrismicArticle {
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

  prismic404 = result.data.allPrismicPageWeb.edges.filter(
    ({ node }) => node.uid === "404"
  );

  result.data.allPrismicPageWeb.edges.forEach(({ node }) => {
    if (!node.uid || node.uid === "homepage" || node.uid === "404") return;
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(`./src/pages/TemplatePageWeb.js`),
      context: {
        uid: node.uid,
      },
    });
  });

  result.data.allPrismicArticle.edges.forEach(({ node }) => {
    createPage({
      path: `/article/${node.uid}`,
      component: path.resolve(`./src/pages/TemplateArticle.js`),
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
      path: "/",
      component: path.resolve(`./src/pages/TemplatePageWeb.js`),
      context: {
        uid: "homepage",
        homepageData: prismicHomepage,
      },
    });
  }
  if (page.path === "/404") {
    console.log("WHAAATTTTT");
    deletePage(page);
    createPage({
      path: "/404",
      component: path.resolve(`./src/pages/TemplatePageWeb.js`),
      context: {
        uid: "404",
        homepageData: prismicHomepage,
      },
    });
  }
};
