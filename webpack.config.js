/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

var nodeEnv = JSON.stringify(process.env.NODE_ENV || 'development');

var entries;
/* eslint-enable */
if (process.env.NODE_ENV === 'production') {
  entries = {
    app: './tictactoe/appRedux.js',
  };
} else {
  entries = {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './tictactoe/appRedux.js'
    ]
  };
}

module.exports = {
  mode: nodeEnv === 'development' ? 'development' : 'production',
  devtool: 'source-map',
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:8080/bundles/'
  },
  module: {
    rules: [
      // { test: /\.jsx?$/, exclude: /node_modules/, use: ['react-hot-loader/webpack', 'babel-loader'] },
      { test: /\.(t|j)sx?$/, exclude: /node_modules/, use: ['react-hot-loader/webpack', 'awesome-typescript-loader'] },
      // { test: /\.(t|j)sx?$/, exclude: /node_modules/, use: ['awesome-typescript-loader'] },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(jpe?g|png|gif|svg)$/i, use: [ 'url-loader?limit=10000', 'img-loader' ] }
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
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': nodeEnv })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: function() { return 'shared'; }
    }
  }
};
