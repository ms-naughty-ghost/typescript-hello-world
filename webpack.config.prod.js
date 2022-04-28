const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  // エントリーポイント
  entry: "./src/app.ts",
  output: {
    // 動的にファイル名作成
    // filename: "bundle.[contenthash].js"
    filename: "app.js",
    // distフォルダの絶対パス
    path: path.resolve(__dirname, "dist"),
  },
  devtool: false,
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
  },
  plugins: [
    new cleanPlugin.CleanWebpackPlugin(),
  ]
};