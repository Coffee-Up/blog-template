// Detiens le Banner
import * as React from "react";

import theme from "../../config/theme.js";

import "../styles/_globalReset.css";
import "../styles/_globalTags.css";
import "../styles/_globalClasses.css";
import "../styles/_globalAnimations.css";

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
