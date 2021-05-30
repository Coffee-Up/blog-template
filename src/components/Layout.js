import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import globalThemeTags from "../styles/_globalStylesTags.js";
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
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      file(relativePath: { eq: "homescreen-banner.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 500
            placeholder: NONE
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
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
        binaryImageDefault={data.file.childImageSharp}
      />
      <main className="g-wrapper-main">{children}</main>
      <Footer
        fillColorSVG={theme.colors.backgroundColor}
        backgroundColor={theme.colors.footer}
      />
    </>
  );
}
