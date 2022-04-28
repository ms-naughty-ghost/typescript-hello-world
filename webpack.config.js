const path = require("path");

module.exports = {
  mode: "development",
  // エントリーポイント
  entry: "./src/app.ts",
  output: {
    // 動的にファイル名作成
    // filename: "bundle.[contenthash].js"
    filename: "app.js",
    // distフォルダの絶対パス
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, "dist"),
        publicPath: "/dist",
      },
      {
        directory: __dirname,
        publicPath: "/"
      }
    ]
  },
  devtool: "eval",
  module: {
    rules: [
      {
        // .tsで終わるファイルに対してts-loaderを使う
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};