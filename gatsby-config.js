module.exports = {
  siteMetadata: {
    title: `RouteSonar`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "material icons outlined"],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
  developMiddleware: app => {
    app.use((req, res, next) => {
     res.set('X-Frame-Options', 'DENY');
     next();
   });
 },
};
