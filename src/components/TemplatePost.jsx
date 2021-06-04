// """ TO DO: Change on back en articleId by postId """
import React from "react";
import "../styles/PostTemplatePage.css";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout, Comments, FormComment } from ".";

export default function PostTemplate({
  data: { mdx: post, allBlogPostComments: nodesComments },
  location,
}) {
  const { body, timeToRead } = post;
  const { heading_picture_big, postId } = post.frontmatter;
  // Its not possible to destructured because it's one deeper level than post
  const { nodes: comments } = nodesComments;
  const img = getImage(heading_picture_big);

  return (
    <>
      <Layout path={location.pathname} postData={{ imageBinary: img }}>
        <div id="post-template-data-container">
          <p id="post-template-time-to-read">{timeToRead} minutes read</p>
        </div>
        <div id="post-template-wrapper-body">
          <MDXRenderer>{body}</MDXRenderer>
          <Comments
            pathname={location.pathname}
            postId={postId}
            comments={comments || []}
          />
        </div>
        <div>
          <FormComment postId={postId} />
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query ($pathSlug: String!, $postId: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        postId
        title
        path
        heading_picture_big {
          childImageSharp {
            gatsbyImageData(
              height: 500
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      body
      timeToRead
    }
    allBlogPostComments(filter: { articleId: { eq: $postId } }) {
      nodes {
        id
        title
        text
        firstname
        contact
        articleId
        createdAt
      }
    }
  }
`;
