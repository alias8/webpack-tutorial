import MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as path from "path";
import * as webpack from "webpack";

const a = [1, 2];
const c = [...a];

const bb = (): number => {
  return 2;
};

const generateWebpackConfig = (): webpack.Configuration => {
  return {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    target: "web",
    mode: "production",
    // devtool: "inline-source-map",
    // optimization: {
    //   usedExports: true
    // },
    // optimization: {
    //   minimize: false,
    //   sideEffects: false,
    // },
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
        },
        // {
        //   test: /\.css$/,
        //   use: [
        //     {
        //       loader: MiniCssExtractPlugin.loader,
        //       // options: {
        //       //   // you can specify a publicPath here
        //       //   // by default it use publicPath in webpackOptions.output
        //       //   publicPath: '../'
        //       // }
        //     },
        //     // 'style-loader',
        //     'css-loader'
        //   ]
        // }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      // new LodashModuleReplacementPlugin(),
      // new BundleAnalyzerPlugin()
    ],

  };

};

webpack(generateWebpackConfig());
