module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js?v=[hash:6]"
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: "ts-loader"
      }
    ]
  }
};
