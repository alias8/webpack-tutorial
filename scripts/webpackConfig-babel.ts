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
          exclude: /node_modules/,
          test: /\.[jt]sx?$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                // plugins: ["lodash"],
                presets: [
                  [
                    // this is what transforms things into our target environment
                    "@babel/preset-env",
                    {
                      /*
                      * Allows use of proposed javascript features! See:
                      * http://kangax.github.io/compat-table/esnext/
                      * https://babeljs.io/docs/en/babel-preset-env#corejs
                      * */
                      corejs: { version: 3, proposals: true },
                      debug: true,
                      useBuiltIns: "usage",
                    },
                  ],
                  // strips out type info, doesn't do any transforms
                  "@babel/typescript",
                ],
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 2, // tell webpack how many loaders before this one there are. (postcss and sass)
                localIdentName: devMode
                  ? "[path][name]--[local]--[hash:base64:5]"
                  : "[hash:base64:8]",
                modules: false,
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
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
        },
      ],
    },
    optimization: {
      // splitChunks: {
      //   chunks: "all",
      // },
      minimize: false,
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
