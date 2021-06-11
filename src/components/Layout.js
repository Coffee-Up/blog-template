import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../styles/_globalReset.css";
import "../styles/_globalGenericTags.css";
import "../styles/_globalAnimations.css";
import "../styles/_globalClasses.css";

import { Footer, MenuMain, Banner, Seo } from ".";

export default function Layout({
  children,
  postData,
  bannerTitle,
  bannerImage,
}) {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
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

  return (
    <>
      <Seo />
      <MenuMain />
      <Banner title={bannerTitle} postData={postData} imageFile={bannerImage} />
      <main className="g-wrapper-main">{children}</main>
      <Footer urls={data.site.siteMetadata.urls} />
    </>
  );
}
