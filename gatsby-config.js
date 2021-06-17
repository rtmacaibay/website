module.exports = {
  siteMetadata: {
    title: 'Robert Macaibay | SWE',
    author: 'Robert Macaibay',
    description: 'Robert Macaibay | Software Engineer | A Gatsby.js site based on Dimension by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/me.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
