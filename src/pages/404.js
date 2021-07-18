import * as React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews";

import { linkResolver } from "../linkResolver";

import TemplatePageWeb from "./TemplatePageWeb";

const ErrorPage = ({ data }) => {
  const page = data.prismicPageWeb;

  return (
    <div>
      <RichText render={page.data.banner_texte.raw} />
    </div>
  );
};

export default withPrismicUnpublishedPreview(TemplatePageWeb, [
  {
    repositoryName: "chr-rugby",
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: TemplatePageWeb,
    }),
  },
]);

export const query = graphql`
  query NotFoundPage {
    prismicPageWeb(id: { eq: "404" }) {
      _previewable
      data {
        banner_texte {
          raw
        }
      }
    }
  }
`;
