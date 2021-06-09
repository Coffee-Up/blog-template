import React from "react";
import "../styles/Banner.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Wave } from ".";

const Banner = ({
  binaryImageDefault,
  postData,
  defaultBanner,
  fillColorSVG,
  bannerTitle,
  customAltImgBanner,
}) => {
  const fluidDefaultImg = getImage(binaryImageDefault);

  return (
    <div
      id={
        postData?.main_tag
          ? `banner-container-${postData.main_tag}-color`
          : "banner-container-default-color"
      }
      className="banner-container"
    >
      <div id="banner-text-container">
        {/* CUSTOM TITLE OR POST TITLE, NOT BOTH */}
        {bannerTitle && <h1>{bannerTitle}</h1>}
        {/* ------------------------------------ */}
        {postData?.title && <h1>{postData.title}</h1>}
        {postData?.timeToRead && <p>{postData.timeToRead} minutes read</p>}
      </div>
      {defaultBanner && (
        <GatsbyImage
          draggable={false}
          image={fluidDefaultImg}
          alt={customAltImgBanner}
        />
      )}
      {postData && (
        <GatsbyImage
          draggable={false}
          image={postData.fluidPostImg}
          alt={customAltImgBanner}
        />
      )}
      <Wave fillColorSVG={fillColorSVG} orientation="top" />
    </div>
  );
};

export default Banner;
