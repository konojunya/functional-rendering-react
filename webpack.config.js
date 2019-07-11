const path = require("path");

module.exports = {
  mode: "production",
  entry: "./client/index.tsx",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};
