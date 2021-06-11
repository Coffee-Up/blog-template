//Use Personal External API to source website with data
// TO DO: Add reject if sourcing fail
const fetch = require("node-fetch");

require("dotenv").config({
  path: `../../.env.${process.env.NODE_ENV}`,
});

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const NODE_TYPE = "blogPostComments";

  const response = await fetch(
    `${process.env.BACK_END_API}/comments`
    // {
    //   headers: {
    //     Authorization: `Token token=${}`
    //   }
    // }
  );
  const comments = await response.json();

  comments.forEach((comment) => {
    actions.createNode({
      ...comment,
      id: createNodeId(`${NODE_TYPE}-${comment._id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(comment),
        contentDigest: createContentDigest(comment),
      },
    });
  });
};
