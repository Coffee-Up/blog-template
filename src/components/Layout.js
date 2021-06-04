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
            height: 800
            placeholder: NONE
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          urls {
            frontEndRepositoryUrl
            fontUrl1
            fontUrl2
            fontUrl3
          }
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
        fillColorSVG={theme.colors.background}
        defaultBanner={defaultBanner}
        binaryImageDefault={data.file.childImageSharp}
      />
      <main className="g-wrapper-main">{children}</main>
      <Footer
        urls={data.site.siteMetadata.urls}
        fillColorSVG={theme.colors.background}
        backgroundColor={theme.colors.footer}
      />
    </>
  );
}
