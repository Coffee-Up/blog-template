import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../styles/_globalReset.css";
import "../styles/_globalGenericTags.css";
import "../styles/_globalAnimations.css";
import "../styles/_globalClasses.css";

import { Footer, Banner, Seo, MainMenu } from ".";

const Layout = ({ children, bannerTitle, bannerImage }) => {
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
      <MainMenu />
      <Banner title={bannerTitle} imageFile={bannerImage} />
      <main className="g-wrapper-main">{children}</main>
      <Footer urls={data.site.siteMetadata.urls} />
    </>
  );
};

export default Layout;
