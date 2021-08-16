const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: "./src/",
    output: {
        path: path.resolve('dist'),
        filename: 'bundled.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000,
        open: true,
        hotOnly: false,
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader","stylus-loader"]
            },
        ]
    },
    plugins: [htmlPlugin],
    resolve: {
        alias: {
            '@p': path.resolve(__dirname, 'public/'),
            '@s': path.resolve(__dirname, 'src/'),
            '@api': path.resolve(__dirname, 'src/api/'),
            '~s': path.resolve(__dirname, 'styles/'),
        }
    },
};