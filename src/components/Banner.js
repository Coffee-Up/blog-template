import * as React from "react";
import "../styles/ComponentBanner.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import { Wave } from "../components";

export default function Banner({
  postData,
  defaultBanner,
  backgroundColor,
  fillColorSVG,
}) {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      file(relativePath: { eq: "homescreen-banner.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 500
            placeholder: TRACED_SVG
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const defaultImage = getImage(data.file.childImageSharp);

  return (
    <div
      style={{ backgroundColor: `${backgroundColor}` }}
      id="banner-container"
    >
      {defaultBanner && (
        <GatsbyImage draggable={false} image={defaultImage} alt="a changer" />
      )}
      {postData && (
        <GatsbyImage
          draggable={false}
          image={postData.imageBinary}
          alt="a changer"
        />
      )}
      <Wave fillColorSVG={fillColorSVG} orientation="top" />
    </div>
  );
}
