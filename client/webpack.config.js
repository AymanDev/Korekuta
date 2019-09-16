const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OfflinePlugin = require("offline-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js?v=[hash:6]"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(pc|sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: process.env.NODE_ENV === "development" }
          },
          "css-loader",
          "postcss-loader"
        ],
        include: [path.join(__dirname, "src"), /node_modules/]
      },
      // {
      //   test: /\.(jpg|jpeg|png|gif)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 10000
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpeg|jpg|gif|svg|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./images/"
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  module.exports.plugins.push(new OfflinePlugin());
}
