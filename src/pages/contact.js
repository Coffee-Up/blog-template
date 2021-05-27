import * as React from "react";
import "../styles/pages/PageContact.css";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout } from "../components";

export default function ContactPage({ data }) {
  const img = getImage(data.file.childImageSharp);

  return (
    <Layout bannerData={{ imageFile: img }}>
      <h1>contact page</h1>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ContactPageQuery {
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
