// const vendors = require('./src/vendors');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts'
  // {
    // app: './src/index.ts' //,
    // path : path.resolve(__dirname, 'dist')
    // vendors,
  // }
  ,
  output: {
    filename: './[name].js'
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
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "less-loader" // compiles Less to CSS
          }]
      }
    ]
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     minChunks: function (module) {
  //       return module.context && module.context.indexOf('node_modules') !== -1;
  //     }
  //   })
  // ]
}
// https://vuejsdevelopers.com/2017/06/18/vue-js-boost-your-app-with-webpack/