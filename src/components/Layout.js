import * as React from "react";

import "../styles/_globalReset.css";
import "../styles/_globalGenericTags.css";
import "../styles/_globalAnimations.css";
import "../styles/_globalClasses.css";

import { Footer, Banner, Seo, MainMenu } from ".";

const Layout = ({
  children,
  bannerTitle,
  bannerImage,
  displayNewsPanel,
  bannerTexte,
  indexPage,
  bannerAlt,
}) => {
  return (
    <>
      <Seo />
      <MainMenu />
      <Banner
        alt={bannerAlt}
        indexPage={indexPage}
        displayNewsPanel={displayNewsPanel}
        title={bannerTitle}
        texte={bannerTexte}
        imageFile={bannerImage}
      />
      <main className="g-wrapper-main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
