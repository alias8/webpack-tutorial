/* tslint:disable:no-implicit-dependencies */
import * as appRoot from "app-root-path";
import autoprefixer from "autoprefixer";
import CleanWebpackPlugin from "clean-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { Stats } from "webpack";

const generateWebpackConfig = (): webpack.Configuration => {
  const devMode = true;
  return {
    devtool: "inline-source-map",
    entry: path.resolve(appRoot.toString(), "src", "index.js"),
    mode: devMode ? "development" : "production",
    module: {
      rules: [
        { test: /\.[jt]sx?$/, exclude: /node_modules/, loader: "babel-loader" },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                localIdentName: devMode
                  ? "[path][name]--[local]--[hash:base64:5]"
                  : "[hash:base64:8]",
                modules: true,
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: (loader: any) => [autoprefixer()],
              },
            },
            { loader: "sass-loader", options: {sourceMap: true}},
          ],
        },
      ],
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(appRoot.toString(), "dist"),
    },
    plugins: [
      new CleanWebpackPlugin(["dist"], {
        root: path.resolve(appRoot.toString()),
      }),
      new FriendlyErrorsWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin(),
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
