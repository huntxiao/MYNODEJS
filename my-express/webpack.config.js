const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: {
    test: "./test"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module:{
      rules:[
          test: /\.css$/,
          use: ['style-loader','css-loader']
      ],
  }
};
