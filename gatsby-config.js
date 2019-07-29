require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Kyle Roach',
    description:
      'Enthusiastic developer with knack for interface design. Creating. Learning. Ready',
    author: 'Kyle Roach',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kyle Roach',
        short_name: 'Kyle Roach',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#333',
        display: 'standalone',
        icon: 'src/images/logo--small.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-80535053-3',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '8qozlkro5dkr',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Raleway:300,600,700',
          'Open Sans:300,400,600', // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
