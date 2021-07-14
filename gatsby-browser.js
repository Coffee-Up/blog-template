import * as React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

import "./src/styles/_globalCssVariables.css";
import "./src/styles/_globalFonts.css";

// Styling for the preview modals.
import "gatsby-plugin-prismic-previews/dist/styles.css";

// Adds a shared React Context for Prismic preview sessions.
export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
);
