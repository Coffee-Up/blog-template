module.exports = {
  siteMetadata: {
    urls: {
    },
    defaultTitlePage: `Blog Template`,
    defaultDescriptionPage: `A demo of the blog template with gatsby`,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "axel-blog",
        schemas: {
          article: require("./src/prismic-schemas/article.json"),
          themes: require("./src/prismic-schemas/themes.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: "axel-blog",
        toolbar: "new",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
  ],
};
