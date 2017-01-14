"use strict";

const autoprefixer = require('autoprefixer');
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve("./src"),

    entry: {
        vendor: [ "babel-polyfill", "whatwg-fetch"],
        cp: [ "./base/index.js" ]
    },

    output: {
        path: path.resolve("./public/assets"),
        sourceMapFilename: '[file].map',
        publicPath: "/assets/",
        filename: "[name]/bundle.js",
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: [ "", ".js", ".less" ],

        alias: {
            base: path.resolve(__dirname, 'src/base/'),
            home: path.resolve(__dirname, 'src/home/'),
            search: path.resolve(__dirname, 'src/search/'),
            course: path.resolve(__dirname, 'src/course/'),
            user: path.resolve(__dirname, 'src/user/'),
            order: path.resolve(__dirname, 'src/order/'),
            mycourse: path.resolve(__dirname, 'src/mycourse/'),
            live: path.resolve(__dirname, 'src/live/')
        }
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [ "babel" ],
                include: path.join(__dirname, 'src/')
            },
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
            },
            {
                test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    postcss: [ autoprefixer() ],

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoErrorsPlugin(),

        new webpack.ProvidePlugin({

        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity
        }),

        new ExtractTextPlugin("[name]/resource/bundle.css")
    ],

    devServer: {
        // proxy: {
        //     "/v1/*": {
        //         "target": {
        //           "host": "120.26.65.167",
        //           "protocol": 'http:',
        //           "port": 8080
        //         },
        //         ignorePath: false,
        //         changeOrigin: true,
        //         secure: false,
        //     }
        // }
    }
};
