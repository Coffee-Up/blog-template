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

  const mdxPages = result.data.allMdx.nodes;

  mdxPages.forEach((page) => {
    actions.createPage({
      path: `post/${page.frontmatter.path}`,
      component: path.resolve("./src/components/_TemplatePost.jsx"),
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
