// import * as React from "react";
// import { graphql } from "gatsby";
// import {
//   withPrismicUnpublishedPreview,
//   componentResolverFromMap,
// } from "gatsby-plugin-prismic-previews";

// import { linkResolver } from "../linkResolver";

// import PageTemplate from "./PageTemplate";

// const NotFoundPage = ({ data }) => {
//   const page = data.prismicPage;

//   return (
//     <div>
//       <h1>{page.data.title.text}</h1>
//     </div>
//   );
// };

// export default withPrismicUnpublishedPreview(PageTemplate, [
//   {
//     repositoryName: "my-repository-name",
//     linkResolver,
//     componentResolver: componentResolverFromMap({
//       page: PageTemplate,
//     }),
//   },
// ]);

// export const query = graphql`
//   query NotFoundPage {
//     prismicPage(id: { eq: "404" }) {
//       _previewable
//       data {
//         title {
//           text
//         }
//       }
//     }
//   }
// `;
