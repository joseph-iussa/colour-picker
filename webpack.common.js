const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader",
                options: {
                    presets: ["react"]
                }
            }
        ]
    },

    resolve: {
        modules: [
            path.resolve(__dirname, "src"),
            "node_modules"
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./templates/index.html"
        })
    ]
};