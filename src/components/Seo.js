import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = () => {
  const { site } = useStaticQuery(query);
  const { defaultTitlePage, defaultDescriptionPage } = site.siteMetadata;

  return (
    <Helmet>
      <html lang="en-US" />
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
