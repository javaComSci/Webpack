const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader takes the css and makes into js
                // style-loader takes the js and injects into the dom
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}