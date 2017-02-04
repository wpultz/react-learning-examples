/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

var nodeEnv = JSON.stringify(process.env.NODE_ENV || 'development');

var entries;
/* eslint-enable */
if (process.env.NODE_ENV === 'production') {
  entries = {
    app: './app.js',
  };
} else {
  entries = {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app.js'
    ]
  };
}

module.exports = {
  devtool: 'source-map',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:8080/bundles/'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['react-hot-loader', 'babel-loader'] }
    ]
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  resolve: {
    alias: {
      react: 'react'
    },
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': nodeEnv }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      filename: 'shared.bundle.js'
    })
  ]
};
