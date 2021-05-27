import * as React from "react";
import "../styles/ComponentBanner.css";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Banner({ imageFile }) {
  return (
    <div id="banner-container">
      <GatsbyImage draggable={false} image={imageFile} alt="a changer" />
    </div>
  );
}
