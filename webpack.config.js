var KOA_SERVER_PORT = 9998;
var HOTLOADER_SERVER_PORT = 9999;

var path = require('path');
var webpack = require('webpack');

module.exports = {

  KOA_SERVER_PORT: KOA_SERVER_PORT,

  HOTLOADER_SERVER_PORT: HOTLOADER_SERVER_PORT,

  debug: true,

  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:' + HOTLOADER_SERVER_PORT,
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'frontend', 'js', 'app.js')
    ]
  },

  output: {
    path: path.join(__dirname, 'backend', 'static'),
    filename: '[name].js',
    // http://stackoverflow.com/questions/28846814/what-does-publicpath-in-webpack-do
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [

      // JSX ///////////////////////////////////////////////////////////////////
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'frontend'),

      // IMAGES ////////////////////////////////////////////////////////////////
      }, {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loader: 'file-loader',
        include: path.join(__dirname, 'frontend', 'img'),
        query: {
          name: 'img/[name].[ext]'
        }

      // CSS ///////////////////////////////////////////////////////////////////
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, 'frontend', 'css')

      // FONTS /////////////////////////////////////////////////////////////////
      }, {
        test: /\.otf\??|\.eot\??|\.svg\??|\.ttf\??|\.woff\??|\.woff2\??/,
        loader: 'file-loader',
        include: path.join(__dirname, 'frontend', 'fonts'),
        query: {
          name: 'fonts/[name].[ext]'
        }
      }

    ]
  },

  devtool: 'cheap-source-map'
};