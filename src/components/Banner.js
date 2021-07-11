import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/Banner.css";

import { NewsPanel } from ".";

const Banner = ({ postData, imageFile }) => {
  const imageFileGatsby = getImage(imageFile) || undefined;

  return (
    <>
      <div className="banner-container">
        <NewsPanel />
        <GatsbyImage
          draggable={false}
          image={imageFileGatsby ? imageFileGatsby : postData?.fluidPostImg}
          alt=""
        />
      </div>
    </>
  );
};

export default Banner;
