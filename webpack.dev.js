const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader"
                    }, {
                        // translates CSS into CommonJS
                        loader: "css-loader"
                    }, {
                        // compiles Sass to CSS
                        loader: "sass-loader"
                    },
                    {
                        // Runs compiled CSS through postcss for vendor prefixing
                        loader: 'postcss-loader'
                    }
                ]
            }
            ,
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash:20].[ext]',
                            limit: 8192
                        }
                    }
                ]
            }
        ],
    }
};
