const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'web',
  mode: 'production',
  devtool: "inline-source-map",
  // optimization: {
  //   usedExports: true
  // },
  optimization: {
    minimize: false,
    sideEffects: false,
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         plugins: ['lodash'],
      //         presets: [['env', {'modules': false, 'targets': {'node': 10}}]]
      //       }
      //     }
      //   ],
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   // you can specify a publicPath here
            //   // by default it use publicPath in webpackOptions.output
            //   publicPath: '../'
            // }
          },
          // 'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ],

};
