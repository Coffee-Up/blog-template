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
    // Source gatsby website with my personal Back-End API
    require.resolve(`${__dirname}/plugins/back-blog-api`),
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `on-verra`,
              enableCustomId: true,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: [`h1`, `h4`],
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
