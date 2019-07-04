const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./test",
  output: {
    filename: "pack.js",
    path: path.resolve(__dirname, "dist")
  }
};
