import * as React from "react";
import { graphql } from "gatsby";
import "../styles/IndexPage.css";

import { Layout, PostsFilterWidget, Avatar, Sidebar } from "../components";

const IndexPage = ({ data }) => {
  return (
    <Layout bannerImage={data.file.childImageSharp}>
      <Sidebar side="left" />
      <div id="index-page-container">
        <div id="index-page-welcome-title-container">
          <Avatar size="big" clickable />
          <h1>Hi, I'm Axel.</h1>
          <h1>
            You will find posts about all my interests : <span>Science</span>,{" "}
            <span>Programmation</span>, <span>Art</span> & <span>More</span>.
          </h1>
        </div>
        <PostsFilterWidget />
      </div>
      <Sidebar side="right" />
    </Layout>
  );
};

export const query = graphql`
  query queryIndexPage {
    file(relativePath: { eq: "banner-home.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 800
          placeholder: NONE
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default IndexPage;
