import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../styles/_globalReset.css";
import "../styles/_globalGenericTags.css";
import "../styles/_globalAnimations.css";
import "../styles/_globalClasses.css";

import { Footer, MenuMain, Banner, Seo } from ".";

export default function Layout({
  children,
  defaultBanner,
  postData,
  pathUrl,
  bannerTitle,
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
      <Seo />
      {/* //TO DO: MENU should know if home */}
      <MenuMain hideHomeLink={isHomePage} />
      <Banner
        bannerTitle={bannerTitle}
        postData={postData}
        defaultBanner={defaultBanner}
        binaryImageDefault={data.file.childImageSharp}
      />
      <main className="g-wrapper-main">{children}</main>
      <Footer urls={urls} />
    </>
  );
}
