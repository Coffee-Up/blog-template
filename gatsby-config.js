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
          main_menu: require("./src/prismic-schemas/main_menu.json"),
          form: require("./src/prismic-schemas/form.json"),
          form: require("./src/prismic-schemas/form.json"),
          global_settings: require("./src/prismic-schemas/global_settings.json"),
          main_navigation: require("./src/prismic-schemas/main_navigation.json"),
          mega_menu: require("./src/prismic-schemas/mega_menu.json"),
          themes: {},
          light_theme: {},
          dark_theme: {},
          menu_principal: {},

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
     resolve: `gatsby-plugin-styled-components`,
     options: {
       // Add any options here
     },
   },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
  ],
};
