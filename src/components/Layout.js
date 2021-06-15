import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../styles/_globalReset.css";
import "../styles/_globalGenericTags.css";
import "../styles/_globalAnimations.css";
import "../styles/_globalClasses.css";

import { Footer, MenuMain, Banner, Seo } from ".";

const Layout = ({ children, postData, bannerTitle, bannerImage }) => {
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
      {/* postData OR title & imageFile not both (postdata have them) */}
      <Banner title={bannerTitle} imageFile={bannerImage} postData={postData} />
      <main className="g-wrapper-main">{children}</main>
      <Footer urls={data.site.siteMetadata.urls} />
    </>
  );
};

export default Layout;
