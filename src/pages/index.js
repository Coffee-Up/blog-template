import * as React from "react";
import "../styles/PageIndex.css";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout, PostsFilterWidget, Avatar } from "../components";

export default function IndexPage({ data }) {
  const img = getImage(data.file.childImageSharp);

  return (
    <Layout bannerData={{ imageFile: img }}>
      <div id="index-wrapper">
        <div id="index-welcome-title-container">
          <div id="index-welcome-avatar">
            <Avatar />
          </div>
          <h1 id="index-welcome-title-text">
            <span>Hi, i'm Axel. </span>
            <br />
            You will find posts about all my interests : <span>
              Science
            </span>, <span>Programmation</span>, <span>Art</span> & more.
          </h1>
        </div>
        <br />
        <PostsFilterWidget width="50%" />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexPageQuery {
    file(relativePath: { eq: "homescreen-banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 300
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
