import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { RichText } from 'prismic-reactjs'

import { linkResolver } from "../../linkResolver";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import Layout from "../../components/Layout";

const ArticleTemplate = ({ data, pageContext }) => {
 const headerImage    = getImage(data.prismicArticle.data.header_image.gatsbyImageData);
 const altHeaderImage = getImage(data.prismicArticle.data.header_image.alt); 

 return (
  <Layout themes={pageContext.themes}>
   <GatsbyImage image={headerImage} alt={altHeaderImage}/>
   <RichText render={data.prismicArticle.data.title.raw} />
  </Layout>
 )
}

export default withPrismicPreview(ArticleTemplate, [
  {
    repositoryName: "axel-blog",
    linkResolver,
  },
]);

export const query = graphql`
 query queryTemplateArticle($uid: String) {
  prismicArticle(uid: { eq: $uid }) {
   data {
    header_image {
     gatsbyImageData(width: 200)
     alt
    }
    title {
     raw
    }
   }
  }
 }`