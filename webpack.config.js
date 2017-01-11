const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var MyPlugin = require('./webpack-module.js');
// const purify = require("purifycss-webpack-plugin");
// const glob = require('glob');

module.exports = {
    entry: "./webpack/entry-vue.js",
    output: {
        path: 'src/assets/',
        filename: "bundle.js"
    },
    resolve: {

    },
    devtool: 'source-map',
    // performance: {
    //     hints: false
    // },
    module: {
        loaders: [
            {
                test: /tether\.js$/,
                loader: "expose-loader?Tether"
            },
            {
                test: /appBase\.js$/,
                loader: "expose-loader?appBase"
            },
            {
                test: /moment\.js$/,
                loader: "expose-loader?moment"
            },
            {
                test: /holder\.js$/,
                loader: "expose-loader?Holder"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                                loader: 'css-loader',
                                fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),
                        scss: ExtractTextPlugin.extract({
                                loader: 'css-loader!sass-loader',
                                fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),

          }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            // {
            //     test: /\.less$/,
            //     loader: "style-loader!css-loader!less-loader"
            // },
            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: "url-loader?limit=10000&mimetype=application/font-woff"
            // },
            //  {
            //     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: "file-loader"
            // },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
                loader: 'file-loader'
              },
             {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            //  {
            //     test: /\.scss$/,
            //     loaders: ["style-loader", "css-loader", "sass-loader"]
            // },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract({
               fallbackLoader: "style-loader",
               loader: "css-loader!sass-loader"
           })
         }

        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),

        new MyPlugin({options: true}),

        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",

        })
    ],
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = 'source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.OccurrenceOrderPlugin(),



        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            debug: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),


    ])
}
