/*
 ./webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const imports = require('imports-loader')

var APP_DIR = path.resolve(__dirname, 'src/app');
var BUILD_DIR = path.resolve(__dirname, 'client/public');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  plugins: [HtmlWebpackPluginConfig],
  entry: ['jquery',APP_DIR + '/index.js'],
  output: { path: BUILD_DIR, filename: 'bundle.js' },
  module: {

    loaders: [
      {
        test: /\.scss$/,
        include: /app/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader?browsers=last 3 versions',
          'sass-loader?outputStyle=expanded'
        ]
      },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' }


    ]
  }
}
