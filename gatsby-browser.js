import * as React from "react";

import "./src/styles/core/variables.css";
import "./src/styles/core/fonts.css";

import "gatsby-plugin-prismic-previews/dist/styles.css";

import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

export const wrapRootElement = ({ element }) => (
   <PrismicPreviewProvider>
     {element}
   </PrismicPreviewProvider>
);


