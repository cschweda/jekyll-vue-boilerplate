const path = require('path');
const webpack = require('webpack');

module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./webpack/entry.js",
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
      path: 'src/assets/javascripts/',
      filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /tether\.js$/, loader: "expose-loader?Tether" },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           "window.jQuery": "jquery",
           "window.Tether": 'tether'
       })
],
};
