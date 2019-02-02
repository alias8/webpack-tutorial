const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'web',
  mode: 'development',
  devtool: "inline-source-map",
     module: {
       rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
         }
       ]
     }
};
