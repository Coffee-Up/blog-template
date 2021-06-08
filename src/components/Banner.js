import React, { useState } from "react";
import "../styles/Banner.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Wave } from ".";

const Banner = ({
  binaryImageDefault,
  postData,
  defaultBanner,
  fillColorSVG,
  bannerTitle,
}) => {
  // this.setState({ animationTransition: "animation: fadeInOpacity 1s" });
  const img = getImage(binaryImageDefault);
  return (
    <div
      id={
        postData?.main_tag
          ? `banner-container-${postData.main_tag}-color`
          : "banner-container-main-color"
      }
      className="banner-container"
    >
      <div id="banner-text-container">
        {bannerTitle && <h1>{bannerTitle}</h1>}
        {postData?.title && <h1>{postData.title}</h1>}
        {postData?.timeToRead && <p>{postData.timeToRead} minutes read</p>}
      </div>
      {defaultBanner && (
        <GatsbyImage draggable={false} image={img} alt="a changer" />
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
};

export default Banner;
