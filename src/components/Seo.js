import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = () => {
  const { site } = useStaticQuery(query);
  const { defaultTitlePage, defaultDescriptionPage } = site.siteMetadata;

  return (
    <Helmet>
      <title>{defaultTitlePage}</title>
      <meta name="description" content={defaultDescriptionPage} />
      {/* <link
        rel="preload"
        href="/fonts/inter-var-latin.woff2"
        as="font"
        crossorigin="anonymous"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="/fonts/fira-code-var-latin.woff2"
        as="font"
        crossorigin="anonymous"
        type="font/woff2"
      /> */}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitlePage
        defaultDescriptionPage
      }
    }
  }
`;

export default Seo;
