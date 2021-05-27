import * as React from "react";
import "../styles/Index.css";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout, PostsFilterWidget, Avatar } from "../components";

export default function IndexPage({ data }) {
  const img = getImage(data.file.childImageSharp);

  return (
    <Layout bannerData={{ imageFile: img }}>
      <div id="index-wrapper">
        <div id="index-welcome-container">
          <Avatar />
          <span
            id="index-homescreen-bold-text"
            className="g-bold-text-primary-font"
          >
            Hi, i'm Axel.{" "}
          </span>
          <h1 id="index-title-banner">
            You will find posts about all my interests : science, programming,
            art & more.
            <br />
          </h1>
        </div>
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
          width: 1920
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
