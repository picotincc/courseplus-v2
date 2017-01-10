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
            mycourse: path.resolve(__dirname, 'src/mycourse/')
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
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=10000&name=images/[name].[ext]'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
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
        proxy: {

        }
    }
};
