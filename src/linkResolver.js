// src/linkResolver.js

export const linkResolver = (doc) => {
  switch (doc.type) {
    // URL for a Page document
    case "page":
      return `/${doc.uid}`;

    // Fallback for all other documents
    default:
      return "/";
  }
};
