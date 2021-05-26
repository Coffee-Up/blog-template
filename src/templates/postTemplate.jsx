import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout } from "../components";

const TitleFlexContainer = styled.div`
  padding: 0 1em;
  @media (min-width: 600px) {
    padding: 2em 10em;
  }
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
const TimeToRead = styled.p`
  font-style: italic;
  margin: 0 0 0 1em;
`;
const WrapperPostPage = styled.div`
  padding: 1em 2em;
  @media (min-width: 600px) {
    padding: 6em 10em;
  }
  line-height: 1.7em;
`;
export default function PostTemplate({ data: { mdx: post } }) {
  const { body, timeToRead } = post;
  const { title, heading_picture_big } = post.frontmatter;
  const image = getImage(heading_picture_big);

  return (
    <>
      <Layout>
        <GatsbyImage image={image} alt="a changer" />
        <TitleFlexContainer>
          <h1>{title}</h1>
          <TimeToRead>{timeToRead} minutes read</TimeToRead>
        </TitleFlexContainer>
        <WrapperPostPage>
          <MDXRenderer>{body}</MDXRenderer>
        </WrapperPostPage>
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
