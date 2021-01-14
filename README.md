# Gatsby Starter - WordPress Twenty Twenty

A port of the WordPress Twenty Twenty theme to Gatsby.

Based on [@henrikwirth's Gatsby Starter Wordpress Twenty Twenty Theme](https://github.com/henrikwirth/gatsby-starter-wordpress-twenty-twenty), [@louiechristie's contribution](https://github.com/louiechristie/blog), and with some inspiration from [@avidsapp's tweaks](https://github.com/avidsapp/gatsby-wordpress-2020).

**Works pretty well but still a work in progress**

This starter uses an early alpha version of the upcoming `gatsby-source-wordpress@v4`. You can find rough documentation for that package [here](https://github.com/TylerBarnes/gatsby/blob/feat/source-wordpress-v4/packages/gatsby-source-wordpress-experimental/README.md).

Checkout some options of the source plugin: [defaultPluginOptions](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/src/models/gatsby-api.js#L6)

## Plugin Versions

Last tested with the following plugin versions.

- WPGraphQL: 1.1.2
- WPGatsby: 0.9.1
- gatsby-source-wordpress-experimental: 7.0.0

## WordPress Setup

1. Make sure to install the two required WP plugins [wp-gatsby](https://github.com/gatsbyjs/wp-gatsby) and [wp-graphql](https://github.com/wp-graphql/wp-graphql)
2. Best you install and activate the default WordPress Twenty Twenty theme
3. Make sure you have Menus with the following slugs:
   - `primary` - Thats the top menu
   - `extended` - That is the menu that opens on the right side as drawer
   - `social-links-menu` - For the Social menu in the footer and in the expanded drawer
      - For the social Icons you need to adjust `SocialMenu.js`. There is a `SocialIcon` function that parses svgs depending on the Link label
4. Rename `.env.example` file to `.env` and edit it with your domain variables.

## Deploy

```console
yarn deploy
```

It will build the site and deploy it to the gh-pages branch on Github.

## Limitations

- Comments are not implemented yet.
- The monthly archive pages are not implemented.
- Tags are not implemented (only Categories).
- Surely there is more. Feel free to suggest things as issues.
  - For the social Icons you need to adjust `SocialMenu.js`. There is a `SocialIcon` function that parses svgs depending on the Link label

## Links

- [gatsby-starter-wordpress-twenty-twenty](https://github.com/henrikwirth/gatsby-starter-wordpress-twenty-twenty)
  - [blog](https://github.com/louiechristie/blog)
  - [gatsby-wordpress-2020](https://github.com/avidsapp/gatsby-wordpress-2020)
- [gatsby-source-wordpress-experimental](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental)
- [WPGatsby - WordPress Plugin](https://github.com/gatsbyjs/wp-gatsby)
- [Twenty Twenty - WordPress Theme](https://de.wordpress.org/themes/twentytwenty/)

## Acknowledgements

- [@HenrikWirth](https://github.com/henrikwirth) - Developer of Gatsby port of WordPress Twenty Twenty theme
- [@LouieChristie](https://github.com/louiechristie) & [@avidsapp](https://github.com/avidsapp) - Open source contributors to Gatsby port of WordPress Twenty Twenty theme
- [@TylerBarnes](https://github.com/TylerBarnes) - Head developer of gatsby-source-wordpress@v4
- [@JasonBahl](https://github.com/jasonbahl) - Head developer of WPGraphQL
