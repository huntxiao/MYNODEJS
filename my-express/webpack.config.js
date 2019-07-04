const webpack = require("webpack");
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
  }
};
