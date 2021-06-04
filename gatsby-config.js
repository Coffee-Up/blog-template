module.exports = {
  siteMetadata: {
    urls: {
      frontEndRepositoryUrl: `https://github.com/Coffee-Up/blog`,
      fontUrl1: `https://github.com/adobe-fonts/source-code-pro`,
      fontUrl2: `https://github.com/JulietaUla/Montserrat`,
      fontUrl3: `https://github.com/microsoft/cascadia-code`,
      twitter: `https://twitter.com/ScienceHCL`,
      github: `https://github.com/Coffee-Up`,
      email: `hello@coffee-up.io`,
    },
    defaultTitlePage: `Axel | Blog`,
    defaultDescriptionPage: `Hi, i'm Axel. You will find posts about all my interests : Science, Programmation, Art & more.`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true, DEV_SSR: false, FAST_DEV: true },
  plugins: [
    require.resolve(`${__dirname}/plugins/back-blog-api`),
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Quiet Light", // Or install your favorite theme from GitHub
            },
          },
        ],
      },
    },
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
    `gatsby-plugin-styled-components`,
  ],
};
