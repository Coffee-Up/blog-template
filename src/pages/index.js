import * as React from "react";
import "../styles/PageIndex.css";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout, PostsFilterWidget, Avatar } from "../components";

export default function IndexPage({ data, location }) {
  const img = getImage(data.file.childImageSharp);

  return (
    <Layout pathUrl={location.pathname} bannerData={{ imageFile: img }}>
      <div id="index-wrapper">
        <div id="index-welcome-title-container">
          <Avatar big clickable />
          <p>Hi, I'm Axel.</p>
          <h1>
            You will find posts about all my interests : <span>Science</span>,{" "}
            <span>Programmation</span>, <span>Art</span> & <span>More</span>.
          </h1>
        </div>
        <br />
        <PostsFilterWidget />
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
