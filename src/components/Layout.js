import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import reset from "../styles/reset.js";
import theme from "../../config/theme.js";
import globalClasses from "../styles/globalClasses.js";
import globalTags from "../styles/globalTags.js";
import globalAnimations from "../styles/globalAnimations.js";

import "@fontsource/mulish/700.css";
import "@fontsource/mulish/400.css";

import { Footer, MenuMain } from ".";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MenuMain />
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
