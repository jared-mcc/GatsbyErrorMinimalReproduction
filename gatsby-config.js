module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-image`
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'testzoosite',
        accessToken:
          'MC5YZ3BEQVJJQUFDSUFVRDY1.77-977-977-977-9Ru-_vSDvv73vv71t77-977-977-977-977-977-9M--_ve-_ve-_vVA-77-977-977-977-977-9Ce-_vUTvv73vv70',
        customTypesApiToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InRlc3R6b29zaXRlLTdhOWYwNjRjLTIzNzYtNGY4MC05NGViLTU1ODhhYzZlNjFmN18zIiwiZGF0ZSI6MTY2MTg5NTk0NywiZG9tYWluIjoidGVzdHpvb3NpdGUiLCJpYXQiOjE2NjE4OTU5NDd9.oKSsO_55qo46BxDShlLGKwcZ2zh0W6bzcM2daTnzMlY',
      },
    },
  ],
}
