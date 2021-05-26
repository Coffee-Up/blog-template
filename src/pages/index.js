import * as React from "react";
import "../styles/Index.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout, Banner } from "../components";
import { PostsFilterWidget } from "../elements";

export default function IndexPage({ data }) {
  const image = getImage(data.file.childImageSharp);

  return (
    <Layout>
      <Banner>
        <GatsbyImage draggable={false} image={image} alt="a changer" />
      </Banner>
      <div id="index-wrapper">
        <div id="index-homescreen-container">
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
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
