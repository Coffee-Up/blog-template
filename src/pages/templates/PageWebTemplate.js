import * as React from "react";
import { graphql } from "gatsby";
import "../../styles/TemplatePageWeb.css";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { linkResolver } from "../../linkResolver";
import { Layout } from "../../components";

const TemplatePageWeb = ({ data }) => {
  return (
    <Layout
    >
      <div className="template-page-web-container">
      </div>
    </Layout>
  );
};

export default withPrismicPreview(TemplatePageWeb, [
  {
    repositoryName: "axel-blog",
    linkResolver,
  },
]);

export const query = graphql`
  query queryTemplatePageWeb($uid: String) {
    prismicPageWeb(uid: { eq: $uid }) {
      _previewable
 	 data {
          body {
            ... on PrismicPageWebDataBodyAlternateGrid {
              id
              primary {
                description {
                  raw
                }
                eyebrow_headline {
                  raw
                }
                title {
                  raw
                }
                optional_image {
                  alt
                }
              }
              slice_label
              slice_type
            }
            ... on PrismicPageWebDataBodyText {
              id
              primary {
                text {
                  raw
                }
              }
            }
          }
       }
    }
  }
`;
