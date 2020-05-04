# Gatsby Starter - WordPress Twenty Twenty

A port of the WordPress Twenty Twenty theme to Gatsby.

**This is still a work in progress**

This starter uses an early alpha version of the upcoming `gatsby-source-wordpress@v4`. You can find rough documentation for that package [here](https://github.com/TylerBarnes/gatsby/blob/feat/source-wordpress-v4/packages/gatsby-source-wordpress-experimental/README.md).

Checkout some options of the source plugin: [defaultPluginOptions](https://github.com/TylerBarnes/gatsby/blob/feat/source-wordpress-v4/packages/gatsby-source-wordpress-experimental/src/models/gatsby-api.js)

## WordPress Setup

1. Make sure to install the two WP plugins in the plugin folder _wp-gatsby-0.2.2.zip_ and _wp-graphql-0.6.1.zip_
2. Best you install and activate the default WordPress Twenty Twenty theme
3. Make sure you have Menus with the following slugs: 
   -  `primary` - Thats the top menu
   -  `extended` - That is the menu that opens on the right side as drawer
   -  `social-links-menu` - For the Social menu in the footer and in the expanded drawer
      -  For the social Icons you need to adjust `SocialMenu.js`. There is a `SocialIcon` function that parses svgs depending on the Link label
      
      
## Limitations

- Comments are no implemented yet.
- The monthly archive pages are not implemented.
- Tags are not implemented (only Categories).
- Surely there is more. Feel free to suggest things as issues.

## Links

- [gatsby-source-wordpress-experimental](https://github.com/TylerBarnes/gatsby/tree/feat/source-wordpress-v4/packages/gatsby-source-wordpress-experimental)
- [WPGatsby - WordPress Plugin](https://github.com/TylerBarnes/gatsby/tree/feat/source-wordpress-v4/packages/wp-gatsby)
- [Twenty Twenty - WordPress Theme](https://de.wordpress.org/themes/twentytwenty/)

## Acknowledgements

- [NeverNull GmbH](https://nevernull.io) - The team I'm working with. Checkout what we are building here: [mobileui.dev](https://mobileui.dev)
- [@TylerBarnes](https://github.com/TylerBarnes/) - Head developer of gatsby-source-wordpress@v4
- [@JasonBahl](https://github.com/jasonbahl) - Head developer of WPGraphQL
- [@LouieChristie](https://github.com/louiechristie) - Open source contributor
