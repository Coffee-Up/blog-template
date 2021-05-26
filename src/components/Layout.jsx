import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import reset from "../styles/reset";
import theme from "../../config/theme";

import "@fontsource/mulish/700.css";
import "@fontsource/mulish/400.css";

import { Footer, MenuMain } from "./";

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

html {
  font-size: 18px;

  body {
    font-family: 'Montserrat Regular';
    a {
      font-size: 1.1rem;
      text-decoration: none;
      color: #594192;
    }

    h1 {
      font-family: 'Fira Code SemiBold';
      font-weight: 500;
      font-size: 1rem;
      @media (min-width: 600px) {
        font-size: 1.4rem;
      }
      padding: 1rem 0;
    }
    
    h2 {
      font-family: 'Fira Code Regular';
      font-weight: 500;
      font-size: 1.3rem;
      padding: 1rem 0;
    }
    
    h3 {
      font-family: 'Fira Code Regular';
      font-weight: 500;
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    p {
      color: black;
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    ul, 
    ol {
      li {
        font-size: 1rem;
      }
    }
  }
}
`;
