/* tslint:disable:no-implicit-dependencies */

import * as appRoot from "app-root-path";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import path from "path";
import webpack, {Stats} from "webpack";

const generateWebpackConfig = (): webpack.Configuration => {
  return {
    devtool: "inline-source-map",
    entry: path.resolve(appRoot.toString(), "src", "index.js"),
    mode: "development",
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      ],
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(appRoot.toString(), "dist"),
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin(),
    ],
    resolve:  {
      extensions: [".ts", ".js"],
    },
    target: "web",
  };
};

webpack(generateWebpackConfig(), (err: Error, stats: Stats) => {
  // if (err) {
  //   console.error(err.stack || err);
  //   if ((err as any).details) {
  //     console.error((err as any).details);
  //   }
  //   return;
  // }
  //
  // const info = stats.toJson();
  //
  // if (stats.hasErrors()) {
  //   console.error(info.errors);
  // }
  //
  // if (stats.hasWarnings()) {
  //   console.warn(info.warnings);
  // }
  //
  // // Log result...
});
