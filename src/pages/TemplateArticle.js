import * as React from "react";
import { graphql } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { linkResolver } from "../linkResolver";
import { Layout, Sidebar } from "../components";

const TemplateArticle = ({ data }) => {
  console.log(data);
  return (
    <Layout
      displayCHR={false}
      displayNewsPanel={false}
      bannerTitle="Un Titre"
      bannerTexte="Un Texte"
      bannerImage={undefined}
      bannerAlt="un alt"
    >
      <Sidebar side="left" />
      <div className="template-article-container">
        <h1>Template Article</h1>
      </div>
      <Sidebar side="right" />
    </Layout>
  );
};

export default withPrismicPreview(TemplateArticle, [
  {
    repositoryName: "chr-rugby",
    linkResolver,
  },
]);

export const query = graphql`
  query queryTemplateArticle($uid: String) {
    prismicArticle(uid: { eq: $uid }) {
      _previewable
      data {
        titre_principal_article
        image_principale {
          gatsbyImageData(width: 1920)
        }
        body {
          ... on PrismicArticleDataBodyDeuxImage {
            primary {
              image_1 {
                gatsbyImageData(width: 910)
                alt
              }
              image_2 {
                gatsbyImageData(width: 910)
              }
            }
            slice_type
          }
          ... on PrismicArticleDataBodyParagraphe {
            slice_type
          }
          ... on PrismicArticleDataBodyTitreParagaphe {
            slice_type
          }
          ... on PrismicArticleDataBodyUneImage {
            id
            primary {
              image {
                gatsbyImageData(width: 1920)
                alt
              }
            }
            slice_type
          }
          ... on PrismicArticleDataBodyUrlVideoYoutube {
            id
            primary {
              url_video_youtube {
                id
              }
            }
            slice_type
          }
        }
      }
      first_publication_date(formatString: "DDMMYYYY")
      tags
    }
  }
`;
