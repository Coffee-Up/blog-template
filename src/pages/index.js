import * as React from "react";
import { graphql } from "gatsby";
import "../styles/IndexPage.css";

import { Layout, Sidebar, OneImageOneTexte } from "../components";

const IndexPage = ({ data }) => {
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
                size={el.primary.taille}
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

export const query = graphql`
  query queryIndexPage {
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
              taille
              texte_orientation
              image {
                alt
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

export default IndexPage;
