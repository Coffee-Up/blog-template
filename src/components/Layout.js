import * as React from "react";
import { createGlobalStyle } from "styled-components";

import "../styles/_globalReset.css";
import "../styles/_globalClasses.css";
import globalThemeTags from "../styles/_globalThemeTags.js";
import globalAnimations from "../styles/_globalAnimations.js";

import { Footer, MenuMain, Banner, Seo } from ".";

const GlobalStyle = createGlobalStyle`
    ${globalThemeTags}
    ${globalAnimations}
  `;

export default function Layout({ children, bannerData, pathUrl }) {
  const { imageFile } = bannerData;
  const isHomePage = pathUrl === "/" ? true : false;

  return (
    <>
      <GlobalStyle />
      <Seo />
      <MenuMain hideHomeLink={isHomePage} />
      <Banner imageFile={imageFile} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
