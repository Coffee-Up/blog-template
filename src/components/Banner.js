import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/Banner.css";

import { Wave } from ".";

const Banner = ({
  binaryImageDefault,
  postData,
  defaultBanner,
  bannerTitle,
}) => {
  const fluidDefaultImg = getImage(binaryImageDefault);

  return (
    <div
      id={
        postData
          ? `banner-container-${postData.main_tag}-color`
          : "banner-container-default-color"
      }
      className="banner-container"
    >
      <div id="banner-text-container">
        <h1>{bannerTitle ? bannerTitle : postData?.title}</h1>
        {postData && <p>{postData.timeToRead} minutes read</p>}
      </div>
      <GatsbyImage
        draggable={false}
        image={defaultBanner ? fluidDefaultImg : postData.fluidPostImg}
        alt=""
      />
      <Wave orientation="top" />
    </div>
  );
};

export default Banner;
