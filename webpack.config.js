const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");




module.exports = {
    entry: "./src/_vue/index.js",
    output: {
        path: path.join(__dirname, './src/assets/'),
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

            // {
            //     test: /moment\.js$/,
            //     loader: "expose-loader?moment"
            // },

            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),
                        scss: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),

                    }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },

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
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin("vue.css"),

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
