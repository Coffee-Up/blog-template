import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
// import { useLocation } from "@reach/router";
//essai
const Seo = () => {
  // const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const { defaultTitlePage, defaultDescriptionPage } = site.siteMetadata;

  return (
    <Helmet>
      <title>{defaultTitlePage}</title>
      <meta name="description" content={defaultDescriptionPage} />
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
