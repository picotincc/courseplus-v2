/**
 * Build mode config
 */
"use strict";
const webpack = require('webpack');
const path = require('path');
const config = require("./webpack.config.dev");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const plugins = [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin(),

    new webpack.ProvidePlugin({

    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.[hash].js",
        minChunks: Infinity
    }),

    new ExtractTextPlugin("[name]/resource/bundle.[chunkhash].css"),

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
        minimize: true
    }),

    new HtmlWebpackPlugin({
        filename: path.resolve("./output/index.html"),
        template: path.resolve("./template/index.html"),
        inject: true,
        chunksSortMode: "dependency"
    })
];

config.plugins = plugins;

config.output =  {
    path: path.resolve("./output/assets"),
    publicPath: "/assets/",
    filename: "[name]/bundle.[chunkhash].js",
    chunkFilename: '[id].[chunkhash].chunk.js'
};


delete config.devServer;
delete config.devtool;

module.exports = config;
