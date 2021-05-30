import * as React from "react";
import { createGlobalStyle } from "styled-components";

import globalThemeTags from "../styles/_globalThemeTags.js";
import globalClasses from "../styles/_globalClasses.js";
import globalReset from "../styles/_globalReset.js";
import globalAnimations from "../styles/_globalAnimations.js";

import theme from "../theme.js";
import { Footer, MenuMain, Banner, Seo } from ".";

const GlobalStyle = createGlobalStyle`
    ${globalReset}
    ${globalThemeTags}
    ${globalClasses}
    ${globalAnimations}
  `;

export default function Layout({
  children,
  defaultBanner,
  postData,
  pathUrl,
  headerText,
}) {
  const isHomePage = pathUrl === "/" ? true : false;
  return (
    <>
      <GlobalStyle />
      <Seo />
      <MenuMain
        backgroundColor={theme.colors.menu}
        headerText={headerText}
        hideHomeLink={isHomePage}
      />
      <Banner
        postData={postData}
        backgroundColor={theme.colors.main}
        fillColorSVG={theme.colors.backgroundColor}
        defaultBanner={defaultBanner}
      />
      <main>{children}</main>
      <Footer
        fillColorSVG={theme.colors.backgroundColor}
        backgroundColor={theme.colors.footer}
      />
    </>
  );
}
