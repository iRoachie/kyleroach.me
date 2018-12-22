module.exports = {
  siteMetadata: {
    title: `Kyle Roach`,
    description: `Enthusiastic developer with knack for interface design. Creating. Learning. Ready`,
    author: `Kyle Roach`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kyle Roach`,
        short_name: `Kyle Roach`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `src/images/logo--small.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-80535053-3',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
