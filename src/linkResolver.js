// src/linkResolver.js

export const linkResolver = (doc) => {
  switch (doc.type) {
    // URL for a Page document
    case "page_web":
      return `/${doc.uid}`;

    // Fallback for all other documents
    default:
      return "/";
  }
};
