export const linkResolver = (doc) => {
  if (doc.uid === "homepage") return `/`;
  switch (doc.type) {
    // URL for a Page document
    case "page_web":
      return `/${doc.uid}`;

    // Fallback for all other documents
    default:
      return "/";
  }
};
