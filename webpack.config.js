var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

/** Loaders */
require('babel-loader');
require('css-loader');
require('file-loader');
require('html-loader');
require('sass-loader');
require('style-loader');
require('url-loader');


var externals = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    externals[mod] = 'commonjs ' + mod;
  });

if (process.env.NODE_ENV == "PRODUCTION") {
} else {
  /** Development configuration */
}


/** Base Configuration */
module.exports = options = {
  devtool: 'eval',
  context: path.resolve(__dirname, "src"),
  entry: {
    main: './main',
    app: ['./index.html', './app'],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/build/',
    filename: '[name].bundle.js'
  },
  externals: externals,
  target: 'electron',
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      { test: /\.sass$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.html$/, loaders: ['html', 'file?name=[name].[ext]'] }
    ]
  }
};


console.log(__dirname);
