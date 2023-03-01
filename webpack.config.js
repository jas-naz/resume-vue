// const vendors = require('./src/vendors');
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');
// const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  // mode: 'production',
  // mode: 'development',
  // context: path.join(__dirname, '/'),
  entry: './src/index.ts',
  // {
  //   app: './src/index.ts' //,
  //   path : path.resolve(__dirname, 'dist')
  //   vendors,
  // },
  output: {
    filename: './[name].js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias : {
      vue : 'vue/dist/vue.js',
      // 'src' : path.resolve(__dirname, '../src'),
      // 'assets' : path.resolve(__dirname, '../src/assets'),
      // 'components' : path.resolve(__dirname, '../src/components')
    } //,
    // modules : [
    //   path.resolve('./'),
    //   path.resolve('./node_modules')
    // ]
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.(css|less)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, { // MiniCssExtractPlugin.loader, "css-loader",
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  },
  // devtool: 'inline-source-map',
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js(\?.*)?$/i,
    }),
    new HtmlWebpackPlugin({
      template: './static/index.html',
      // title: 'Development',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./static/*.json" }
      ]
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    // }),
    //   new NpmInstallPlugin(),
    // //   new webpack.optimize.CommonsChunkPlugin({
    // //     name: 'vendor',
    // //     minChunks: function (module) {
    // //       return module.context && module.context.indexOf('node_modules') !== -1;
    // //     }
    // //   })
  ],
  devServer: {
    static: {
      directory: './dist',
      watch: true
    },
    host: 'localhost',
    hot: true,
    devMiddleware: {
      writeToDisk: false,
    },
    watchFiles: ['static/*.json'],
  },
  optimization: {
    runtimeChunk: 'single',
  },
}
// https://vuejsdevelopers.com/2017/06/18/vue-js-boost-your-app-with-webpack/