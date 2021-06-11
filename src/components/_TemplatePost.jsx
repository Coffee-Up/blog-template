// """ TO DO: Change on back en articleId by postId """
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "../styles/_TemplatePostsPage.css";

import { GetRootFolderName } from "../utils/helpersFunctions";
import { Layout, Comments, FormComment, Sidebar } from ".";

const TemplatePostsPage = ({
  data: { mdx: post, allBlogPostComments: nodesComments },
  location,
}) => {
  const { body, timeToRead, slug } = post;
  const { heading_picture_big, postId, title, alt_img } = post.frontmatter;
  const { nodes: comments } = nodesComments;

  const fluidPostImg = getImage(heading_picture_big);
  const mainTag = GetRootFolderName(slug);

  return (
    <>
      <Layout
        path={location.pathname}
        postData={{
          fluidPostImg,
          title,
          timeToRead,
          alt_img,
          mainTag,
        }}
      >
        <Sidebar side="left" />
        <div>
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
        </div>
        <Sidebar side="right" />
      </Layout>
    </>
  );
};

export const query = graphql`
  query querytemplatePostPage($pathSlug: String!, $postId: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      body
      timeToRead
      slug
      frontmatter {
        alt_img
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
    }
    allBlogPostComments(filter: { articleId: { eq: $postId } }) {
      nodes {
        id
        title
        text
        username
        articleId
        createdAt(formatString: "MMMM, Do, YYYY")
      }
    }
  }
`;

export default TemplatePostsPage;
