import * as React from "react";
import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { Layout, Sidebar, OneImageOneTexte } from "../components";
import { linkResolver } from "../linkResolver";

const PageTemplate = ({ data }) => {
  const banner = data.prismicHomepage.data.body.filter(
    (el) => el.slice_type === "banner"
  )[0];

  const dataPage = data.prismicHomepage.data.body;
  return (
    <Layout
      indexPage="Capbreton Hossegor Rugby"
      bannerTexte={banner.primary.paragraphe.raw}
      displayNewsPanel
      bannerImage={banner.primary.image.gatsbyImageData}
    >
      <Sidebar side="left" />
      <div id="index-page-container">
        {dataPage.map((el) => {
          if (el.slice_type === "image_et_texte") {
            return (
              <OneImageOneTexte
                prismicDataTexte={el.primary.texte.raw}
                prismicDataImage={el.primary.image.gatsbyImageData}
                textePosition={el.primary.texte_orientation}
                textSize={el.primary.taille_texte}
                imgWidth={el.primary.image.dimensions.width}
                textVerticalAlign={el.primary.texte_alignement_vertical}
                alt={el.primary.image.alt}
                logo={el.primary.logo}
              />
            );
          }
          return;
        })}
      </div>
      <Sidebar side="right" />
    </Layout>
  );
};

export default withPrismicPreview(PageTemplate, [
  {
    repositoryName: "chr-rugby",
    linkResolver,
  },
]);

export const query = graphql`
  query PageTemplate {
    prismicHomepage {
      data {
        body {
          ... on PrismicHomepageDataBodyBanner {
            slice_type
            primary {
              titre {
                raw
              }
              image {
                alt
                gatsbyImageData(srcSetMaxWidth: 2560, placeholder: NONE)
              }
              paragraphe {
                raw
              }
            }
          }
          ... on PrismicHomepageDataBodyImageEtTexte {
            slice_type
            primary {
              logo
              taille_texte
              texte_alignement_vertical
              texte_orientation
              image {
                alt
                dimensions {
                  width
                }
                gatsbyImageData
              }
              texte {
                raw
              }
            }
          }
        }
      }
    }
  }
`;
