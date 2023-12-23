const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    host: "localhost",
    port: 3000,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, "build"),
      // match the output 'publicPath'
      publicPath: "/",
    },

  //   headers: { "Access-Control-Allow-Origin": "*" },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      "/home/**": {
        target: "http://localhost:3000/",
        router: () => "http://localhost:8080/",
        secure: false,
      }
    },
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: [".js", ".jsx"],
  }
};
