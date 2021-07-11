import * as React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import "../styles/IndexPage.css";

import { Layout, Sidebar } from "../components";

const IndexPage = ({ data }) => {
  const firstSlice = data.prismicHomepage.data.body[0].primary;

  return (
    <Layout bannerImage={firstSlice.image.gatsbyImageData}>
      <Sidebar side="left" />
      <div id="index-page-container">
        <RichText render={firstSlice.titre.raw} />
        <RichText render={firstSlice.paragraph.raw} />
      </div>
      <Sidebar side="right" />
    </Layout>
  );
};

export const query = graphql`
  query queryIndexPage {
    prismicHomepage {
      data {
        body {
          ... on PrismicHomepageDataBodyBanner {
            primary {
              titre {
                raw
              }
              image {
                gatsbyImageData(width: 1920, placeholder: NONE)
              }
              paragraph {
                raw
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
