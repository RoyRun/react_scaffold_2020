const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
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
                    include: path.resolve(__dirname, 'src')
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
                        'less-loader'
                    ],
                    include: path.resolve(__dirname, 'src')
            },{
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            esModule: true
                        }
                    },
                    'css-loader'
                ],
                include: path.resolve(__dirname,'src')
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