import * as React from "react";
import { graphql } from "gatsby";
import "../styles/IndexPage.css";
import { v4 as uuidv4 } from "uuid";

import { Layout, Sidebar, OneImageOneTexte } from "../components";

const IndexPage = ({ data }) => {
  const banner = data.prismicHomepage.data.body.filter(
    (el) => el.slice_type === "banner"
  )[0];

  const dataPage = data.prismicHomepage.data.body;

  return (
    <Layout
      indexPage
      displayNewsPanel
      bannerTexte={banner.primary.paragraphe.raw}
      bannerImage={banner.primary.image.gatsbyImageData}
      bannerAlt={banner.primary.image.alt}
    >
      <Sidebar side="left" />
      <div id="index-page-container">
        {dataPage.map((el) => {
          if (el.slice_type === "image_et_texte") {
            return (
              <div key={uuidv4()}>
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
              </div>
            );
          }
          return <React.Fragment key={uuidv4()}></React.Fragment>;
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
            id
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

export default IndexPage;
