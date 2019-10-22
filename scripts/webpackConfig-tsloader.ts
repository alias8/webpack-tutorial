/* tslint:disable:no-implicit-dependencies */
import * as appRoot from "app-root-path";
import autoprefixer from "autoprefixer";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import LodashModuleReplacementPlugin from "lodash-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { Stats } from "webpack";

const generateWebpackConfig = (): webpack.Configuration => {
  const devMode = true;
  return {
    devtool: "inline-source-map",
    entry: path.resolve(appRoot.toString(), "src", "ie11-test.ts"),
    mode: devMode ? "development" : "production",
    module: {
      rules: [
        {
          loader: "ts-loader",
          test: /\.ts$/,
        },
      ],
    },
    optimization: {
      // splitChunks: {
      //   chunks: "all",
      // },
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(appRoot.toString(), "dist"),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin(),
      new LodashModuleReplacementPlugin(),
      // new BundleAnalyzerPlugin(),
    ],
    resolve: {
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
