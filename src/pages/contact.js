import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import "../styles/ContactPage.css";

import { Layout, Sidebar } from "../components";

const ContactPage = ({ data }) => {
  const contactPageData = data.prismicContact.data;
  const firstSlice = contactPageData.body[0].primary;
  //   const coordinate = [
  //     contactPageData.stade_capbreton.latitude,
  //     contactPageData.stade_capbreton.longitude,
  //   ];

  return (
    <Layout bannerImage={firstSlice.image.gatsbyImageData}>
      <Sidebar side="left" />
      <div id="contact-page-container">
        <RichText render={firstSlice.titre.raw} />
        <RichText render={firstSlice.paragraph.raw} />
      </div>
      <Sidebar side="right" />
    </Layout>
  );
};

export const query = graphql`
  query queryContactPage {
    prismicContact {
      data {
        stade_capbreton {
          latitude
          longitude
        }
        body {
          ... on PrismicContactDataBodyBanner {
            primary {
              titre {
                raw
              }
              paragraph {
                raw
              }
              image {
                gatsbyImageData(srcSetMaxWidth: 2560, placeholder: NONE)
              }
            }
          }
          ... on PrismicContactDataBodyText {
            id
            primary {
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

export default ContactPage;
