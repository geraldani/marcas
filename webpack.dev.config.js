const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const PORT = 9000
const URL = `http://localhost:${PORT}/`

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        filename: 'app.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: URL,
        chunkFilename: 'file.[id].[chunkhash].js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: PORT,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpe?g|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}
