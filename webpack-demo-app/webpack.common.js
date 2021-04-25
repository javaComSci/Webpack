const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                // scss-loader takes the scss and makes into css
                // css-loader takes the css and makes into js
                // style-loader takes the js and injects into the dom
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}