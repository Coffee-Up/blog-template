import React from "react";
import "../styles/PagePostTemplate.css";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout } from "../components";

export default function PostTemplate({ data: { mdx: post } }) {
  const { body, timeToRead } = post;
  const { title, heading_picture_big } = post.frontmatter;
  const img = getImage(heading_picture_big);

  return (
    <>
      <Layout bannerData={{ imageFile: img }}>
        <div id="post-template-header-container">
          <h1 id="post-template-title">{title}</h1>
          <p id="post-template-time-to-read">{timeToRead} minutes read</p>
        </div>
        <div id="post-template-wrapper-body">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query ($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
        heading_picture_big {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      body
      timeToRead
    }
  }
`;
