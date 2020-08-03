const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    entry: {
        index: './src/index.js',
        lib: './src/lib/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            },{
                test: /\.s[ac]ss$/i,
                use: [
                        isDev ? 'style-loader': MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }, 
                        'sass-loader'
                    ],
            },{
                test: /\.less$/i,
                use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                                loader: 'css-loader',
                                options: {
                                    modules: true
                                }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true //version: 5.0.0
                            }
                        }
                    ],
            },{
                test: /\.css$/i,
                use: [
                    {
                        loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    },
                    'css-loader'
                ],
            },{
                test: /\.(png|jpg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192 //8k
                        }
                    }
                ],
                include: path.resolve(__dirname,'src')
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'hello_world',
            minify: false
        })
    ]
}