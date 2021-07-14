import React from "react";
import { RichText } from "prismic-reactjs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/Banner.css";

import { NewsPanel } from ".";

const Banner = ({ imageFile, displayNewsPanel, title, texte, indexPage }) => {
  const imageFileGatsby = getImage(imageFile);

  return (
    <>
      <div id="banner-container">
        <div id="banner-front-container">
          <div>
            {indexPage && (
              <h1>
                <span id="index-page-c">Capbreton</span>
                <span id="index-page-h">Hossegor</span>
                <span id="index-page-r">Rugby</span>
              </h1>
            )}
            <RichText render={title} />
            <RichText render={texte} />
          </div>
          {displayNewsPanel && <NewsPanel />}
        </div>
        <GatsbyImage draggable={false} image={imageFileGatsby} alt="" />
      </div>
    </>
  );
};

export default Banner;
