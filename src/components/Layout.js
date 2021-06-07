import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import "../styles/_globalReset.css";
import globalStylesTags from "../styles/_globalStylesTags.js";
import globalClasses from "../styles/_globalClasses.js";
import globalAnimations from "../styles/_globalAnimations.js";

import theme from "../theme.js";
import { Footer, MenuMain, Banner, Seo } from ".";
// TO DO: Find a better way to implement reset and others globals CSSConditionRule.
const GlobalStyle = createGlobalStyle`
    ${globalStylesTags}
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
            twitterProfileUrl
            githubProfileUrl
            firaCodeUrl
            interUrl
          }
        }
      }
    }
  `);
  const isHomePage = pathUrl === "/" ? true : false;
  const { urls } = data.site.siteMetadata;

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
        urls={urls}
        fillColorSVG={theme.colors.background}
        backgroundColor={theme.colors.footer}
      />
    </>
  );
}
