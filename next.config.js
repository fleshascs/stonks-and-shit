const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  env: require('./site.config'),
  images: {
    disableStaticImages: true
  }
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
        //https://github.com/cyrilwanner/next-optimized-images/issues/206
        responsive: {
          adapter: require('responsive-loader/sharp')
        }
      }
    ]
  ],
  nextConfig
);
