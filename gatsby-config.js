module.exports = {
  siteMetadata: {
    urls: {
      frontEndRepositoryUrl: `https://github.com/Coffee-Up/blog`,
      firaCodeUrl: `https://github.com/tonsky/FiraCode`,
      interUrl: `https://rsms.me/inter/`,
      twitterProfileUrl: `https://twitter.com/ScienceHCL`,
      githubProfileUrl: `https://github.com/Coffee-Up`,
      email: `${process.env.PERSONAL_EMAIL}`,
    },
    defaultTitlePage: `Capbreton Hossegor Rugby – CHR`,
    defaultDescriptionPage: `Hi, i'm Axel. You will find posts about all my interests : Science, Programmation, Art & more.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "chr-rugby",
        schemas: {
          article: require("./src/prismic/article.json"),
          contact: require("./src/prismic/contact.json"),
          page_accueil: require("./src/prismic/page_accueil.json"),
          page_acceuil: require("./src/prismic/page_acceuil.json"),
          homepage: require("./src/prismic/homepage.json"),
          sponsors: require("./src/prismic/sponsors.json"),
          footer: require("./src/prismic/footer.json"),
          page_web: require("./src/prismic/page_web.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: "chr-rugby",
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
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true,
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/fonts/*": [
            "Cache-Control: public",
            "Cache-Control: max-age=365000000",
            "Cache-Control: immutable",
          ],
        },
      },
    },
  ],
};
