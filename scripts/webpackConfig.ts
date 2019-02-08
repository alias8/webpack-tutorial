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
    devtool: "inline-source-map",
    mode: "production",
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      ],
    },
  };

};

console.log(`${generateWebpackConfig()}`)

webpack(generateWebpackConfig(), (err, stats) => {
  if (err || stats.hasErrors()) {
    // Handle errors here
  }
  // Done processing
});
