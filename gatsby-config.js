module.exports = {
  siteMetadata: {
    title: "Learn Gatsby !",
    author: "Abdelhak Jinen",
  },
  plugins: [
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "a64fl0qjbiqf",
        accessToken: "cE6haGw5uUJxsWghFGZQd5Z39eEWSph1QyHvviRKV3c",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
