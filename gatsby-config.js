require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    defaultTitlePage: `Axel | Blog`,
    defaultDescriptionPage: `Hi, i'm Axel. You will find posts about all my interests : Science, Programmation, Art & more.`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: false, DEV_SSR: false, FAST_DEV: true },
  plugins: [
    // SOURCING BACK END REST API
    require.resolve(`${__dirname}/plugins/back-blog-api`),
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [],
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
