// Detiens le Banner
import * as React from "react";

import theme from "../../config/theme.js";

import "../styles/_globalReset.css";
import "../styles/_globalTags.css";
import "../styles/_globalClasses.css";
import "../styles/_globalAnimations.css";

import { Footer, MenuMain, Banner } from ".";

export default function Layout({ children, bannerData, pathUrl }) {
  const { imageFile } = bannerData;
  const isHomePage = pathUrl === "/" ? true : false;

  return (
    <>
      <MenuMain hideHomeLink={isHomePage} />
      <Banner imageFile={imageFile} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
