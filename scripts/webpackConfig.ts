import * as appRoot from "app-root-path";
import * as path from "path";
import * as webpack from "webpack";

const generateWebpackConfig = (): webpack.Configuration => {
  return {
    entry: path.resolve(appRoot.toString(), "src", "index.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(appRoot.toString(), "dist"),
    },
    target: "web",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        }
      ],
    },
  };

};

console.log(`${JSON.stringify(generateWebpackConfig())}`);
webpack(generateWebpackConfig());
