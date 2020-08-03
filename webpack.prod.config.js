
const common = require('./webpack.common.config.js')
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'hidden-module-source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin({
                sourceMap: true
            }) //override the default minimizer by providing a different one or more customized
        ],
        splitChunks: {
            chunks: 'all' //异步同步模块都同时进行打包
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: 'public'
                }
            ]
        }),
        
    ]
})