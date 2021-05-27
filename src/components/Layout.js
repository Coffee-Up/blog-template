// Detiens le Banner
import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import reset from "../styles/reset.js";
import theme from "../../config/theme.js";
import globalClasses from "../styles/globalClasses.js";
import globalTags from "../styles/globalTags.js";
import globalAnimations from "../styles/globalAnimations.js";

import "@fontsource/mulish/700.css";
import "@fontsource/mulish/400.css";

import { Footer, MenuMain, Banner } from ".";

export default function Layout({ children, bannerData }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MenuMain />
        <Banner imageFile={bannerData.imageFile} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${theme}
  ${globalTags}
  ${globalAnimations}
  ${globalClasses}
`;
