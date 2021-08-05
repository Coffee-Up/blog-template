import * as React from "react";
import { graphql } from "gatsby";
import "../styles/TemplatePageWeb.css";
import { v4 as uuidv4 } from "uuid";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { linkResolver } from "../linkResolver";
import { Layout, Sidebar, OneImageOneTexte, MapViewer } from "../components";

const TemplatePageWeb = ({ data }) => {
  return (
    <Layout
      displayBanner={data.prismicPageWeb.data.afficher_banner}
      displayCHR={data.prismicPageWeb.data.banner_afficher_chr}
      displayNewsPanel={data.prismicPageWeb.data.banner_afficher_news}
      bannerTitle={data.prismicPageWeb.data.banner_titre}
      bannerTexte={data.prismicPageWeb.data.banner_texte.raw}
      bannerImage={data.prismicPageWeb.data.banner_image.gatsbyImageData}
      bannerAlt={data.prismicPageWeb.data.banner_image.alt}
    >
      <Sidebar side="left" />
      <div className="template-page-web-container">
        {data.prismicPageWeb.data.body.map((el) => {
          if (el.slice_type === "image_et_texte") {
            return (
              <div key={uuidv4()}>
                <OneImageOneTexte
                  prismicDataTexte={el.primary.texte.raw}
                  prismicDataImage={el.primary.image.gatsbyImageData}
                  textePosition={el.primary.texte_orientation}
                  textSize={el.primary.taille_texte}
                  textVerticalAlign={el.primary.texte_alignement_vertical}
                  alt={el.primary.image.alt}
                  logo={el.primary.logo}
                />
              </div>
            );
          } else if (el.slice_type === "carte_interactive") {
            // TODO: Readability => It would be better to have everything in the
            // component for better isolability (css etc)
            return (
              <div
                className="template-page-carte-interactive-container"
                key={uuidv4()}
                style={{
                  width: el.primary.largeur_carte_interactive_pixels,
                  height: el.primary.hauteur_carte_interactive_pixels,
                }}
              >
                <h1>{el.primary.titre_carte_interactive}</h1>
                <MapViewer mapsData={el.items} />
              </div>
            );
          }
        })}
      </div>
      <Sidebar side="right" />
    </Layout>
  );
};

export default withPrismicPreview(TemplatePageWeb, [
  {
    repositoryName: "chr-rugby",
    linkResolver,
  },
]);

export const query = graphql`
  query queryTemplatePageWeb($uid: String) {
    prismicPageWeb(uid: { eq: $uid }) {
      _previewable
      data {
        afficher_banner
        banner_titre
        banner_afficher_chr
        banner_afficher_news
        banner_image {
          gatsbyImageData
          alt
        }
        banner_texte {
          raw
        }
        body {
          ... on PrismicPageWebDataBodySectionTexte {
            primary {
              texte {
                raw
              }
            }
            slice_type
          }
          ... on PrismicPageWebDataBodyImageEtTexte {
            primary {
              taille_texte
              logo
              texte_alignement_vertical
              texte_orientation
              image {
                gatsbyImageData
                alt
              }
              texte {
                raw
              }
            }
            slice_type
          }
          ... on PrismicPageWebDataBody2Images {
            slice_type
            primary {
              image_droite {
                gatsbyImageData
                alt
              }
              image_gauche {
                gatsbyImageData
                alt
              }
            }
          }
          ... on PrismicPageWebDataBodyCarteInteractive {
            slice_type
            primary {
              titre_carte_interactive
              deux_par_deux
              hauteur_carte_interactive_pixels
              largeur_carte_interactive_pixels
            }
            items {
              coordonnees {
                latitude
                longitude
              }
              nom_lieu {
                raw
              }
            }
          }
          ... on PrismicPageWebDataBodyTitreLiens {
            slice_type
            primary {
              paragraph {
                raw
              }
              titre {
                raw
              }
            }
            items {
              texte_du_lien {
                raw
              }
            }
          }
        }
      }
    }
  }
`;
