const { NamedModulesPlugin } = require("webpack");

const {merge} = require('webpack-merge');
const common = require('./webpack.common.config.js')
const webpack = require('webpack')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hotOnly: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});