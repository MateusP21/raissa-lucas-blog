// gatsby-config.js
module.exports = {
    siteMetadata: {
      title: 'Raissa L.',
      description: 'Meu blog'
    },
    plugins: [
      "gatsby-plugin-catch-links",
      "gatsby-transformer-remark",
      "gatsby-plugin-react-helmet",
      `gatsby-plugin-netlify-cms`,
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts",
          path: `${__dirname}/content/posts`
        }
      }
    ]
  }