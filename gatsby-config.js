require("dotenv").config({
  path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Creative Tech Blog`,
    description: `Gatsby Theme for Creative Tech Blog powered by headless WordPress JAM stack.`,
    author: `@louiechristie`,
    monetization: `$ilp.gatehub.net/484331722`
  },
  plugins: [
    `gatsby-plugin-notifications`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        pathPrefix: "/blog",
        url: process.env.WPGRAPHQL_URL,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        html: {
          fallbackImageMaxWidth: 800,
        },
        // fields can be excluded globally.
        // this example is for wp-graphql-gutenberg.
        // since we can get block data on the `block` field
        // we don't need these fields
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  35
                : // And then we can pull all posts in production
                  null,
          },
          // this shows how to exclude entire types from the schema
          // this example is for wp-graphql-gutenberg
          CoreParagraphBlockAttributesV2: {
            exclude: true,
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Creative Tech Blog`,
        short_name: `Creative Tech Blog`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#1e73be`,
        display: `browser`,
        icon: `src/assets/images/icon.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-mailgo`,
      options: {
        mailgoConfig: {
          showFooter: false,
          actions: {
            whatsapp: false,
          },
        },
      },
    },
  ],
}
