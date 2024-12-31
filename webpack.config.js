const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/app.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html"
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          }
        ],
    },
};