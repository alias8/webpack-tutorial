const path = require("path");
const appRoot = require("app-root-path")

module.exports = {
  entry: path.resolve(appRoot.toString(), "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(appRoot.toString(), "dist"),
  },
  target: "web",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
};
