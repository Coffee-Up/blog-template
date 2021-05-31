const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
            postId
          }
        }
      }
    }
  `);

  const pages = result.data.allMdx.nodes;

  pages.forEach((page) => {
    actions.createPage({
      path: page.frontmatter.path,
      component: path.resolve("./src/templates/PostTemplate.jsx"),
      context: {
        pathSlug: page.frontmatter.path,
        // GraphQl queries need String type or throw an error, of course if i write frontmatter's post in string its fine, but I can make mistakes
        postId: `${page.frontmatter.postId}`,
      },
    });
  });

  if (result.errors) {
    reporter.panic("failed to create posts ", result.errors);
  }
};
