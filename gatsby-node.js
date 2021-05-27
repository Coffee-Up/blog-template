const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts ", result.errors);
  }

  const pages = result.data.allMdx.nodes;

  pages.forEach((page) => {
    actions.createPage({
      path: page.frontmatter.path,
      component: path.resolve("./src/templates/PostTemplate.jsx"),
      context: {
        pathSlug: page.frontmatter.path,
      },
    });
  });
};
