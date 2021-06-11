import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/Banner.css";

import { Wave } from ".";
const Banner = ({ postData, staticTitle, imageFile }) => {
  const imageFileGatsby = getImage(imageFile) || undefined;

  return (
    <div
      id={`banner-container-color-${postData?.mainTag}`}
      className="banner-container"
    >
      <div id="banner-text-container">
        <h1>{staticTitle ? staticTitle : postData?.title}</h1>
        {postData && <p>{postData.timeToRead} minutes read</p>}
      </div>
      <GatsbyImage
        draggable={false}
        image={imageFileGatsby ? imageFileGatsby : postData?.fluidPostImg}
        alt=""
      />
      <Wave orientation="top" />
    </div>
  );
};

export default Banner;
