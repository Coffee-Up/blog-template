import * as React from "react";
import { graphql } from "gatsby";

import { Layout, Sidebar } from "../../components";

const NewsClubPage = ({ data }) => {
  return (
    <Layout bannerImage={data.file.childImageSharp}>
      <Sidebar side="left" />
      <h1>Page News Club</h1>
      <Sidebar side="right" />
    </Layout>
  );
};

export const query = graphql`
  query queryNewsClubPage {
    file(relativePath: { eq: "banner-home.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1920, placeholder: NONE, formats: [PNG])
      }
    }
  }
`;

export default NewsClubPage;
