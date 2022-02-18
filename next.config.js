//Custom Webpack
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const withFonts = require('next-fonts');
const withImages = require('next-images')

module.exports = withFonts();
module.exports = withImages();
module.exports = {
  // experimental: {
  //   concurrentFeatures: true,
  //   serverComponents: true
  // },
  swcMinify: true,
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com', 'source.unsplash.com', 'media.istockphoto.com'],
  },
  webpack: (config, options) => {
    config.optimization.minimizer = [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ];
    config.optimization.minimize = true;

    config.module.rules.push(
      {
        test: /\.(jpe?g|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      }
    )
    config.plugins = config.plugins || [];
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    );
    // config.plugins.push(new DuplicatePackageCheckerPlugin());
    return config
  },
  pageExtensions: ['ts', 'tsx'],
}
