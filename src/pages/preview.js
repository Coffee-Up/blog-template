import * as React from "react";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";

import { linkResolver } from "../linkResolver";

const PreviewPage = () => {
  return (
    <div>
      <h1>Veuillez Patienter ... Chargment de la prĂ©visualisation en cours</h1>
    </div>
  );
};

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: "axel-blog",
    linkResolver,
  },
]);
