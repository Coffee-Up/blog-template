// Detiens le Banner
import * as React from "react";

import theme from "../../config/theme.js";

import "../styles/globals/globalReset.css";
import "../styles/globals/globalClasses.css";
import "../styles/globals/globalTags.css";
import "../styles/globals/globalAnimations.css";

import { Footer, MenuMain, Banner } from ".";

export default function Layout({ children, bannerData }) {
  const { imageFile } = bannerData;

  return (
    <>
      <MenuMain />
      <Banner imageFile={imageFile} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
