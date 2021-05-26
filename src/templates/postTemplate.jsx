import React from "react";
import "../styles/PostTemplate.css";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout, Banner } from "../components";

export default function PostTemplate({ data: { mdx: post } }) {
  const { body, timeToRead } = post;
  const { title, heading_picture_big } = post.frontmatter;
  const image = getImage(heading_picture_big);

  return (
    <>
      <Layout>
        <Banner>
          <GatsbyImage
            id="post-template-image-banner"
            draggable={false}
            image={image}
            alt="a changer"
          />
        </Banner>
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
              placeholder: DOMINANT_COLOR
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
