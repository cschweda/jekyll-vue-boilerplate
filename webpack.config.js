const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./webpack/entry-vue.js",
    output: {
        path: 'src/assets/',
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /tether\.js$/,
                loader: "expose-loader?Tether"
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
             {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
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
           }) }

        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",

        })
    ],
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
