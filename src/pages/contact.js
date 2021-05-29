import * as React from "react";
import "../styles/PageContact.css";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout } from "../components";

export default function ContactPage({ data }) {
  const img = getImage(data.file.childImageSharp);

  return (
    <Layout bannerData={{ imageFile: img }}>
      <div id="contact-page-container">
        <p id="contact-page-introduction">
          Hi, I have built this website mainly to{" "}
          <span>organize my thougths</span>, going
          <span> deeper</span> in my learnings & <span>share</span> what I do if
          it can helps someone in any way.
        </p>
      </div>
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
