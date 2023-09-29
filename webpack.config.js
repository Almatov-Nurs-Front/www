// Modules
const path = require('path');
const chalk = require('chalk');

// Plugins
const WebpackBarPlugin = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Variables
const PORT = 3000;
const COLOR = '#9ef51b';
const STATIC_DIR = 'public';

// Configs
const config = {
  mode: 'development',
  entry: { filename: path.resolve(__dirname, 'src/index.js') },
  output:{
    path: path.resolve(__dirname, STATIC_DIR),
    filename: 'index.js',
    assetModuleFilename: '[name][ext]'
  },
  devServer: {
    port: PORT,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, STATIC_DIR),
    }
  },
  infrastructureLogging: {
    level: 'error'
  },
  stats: 'errors-warnings',
  plugins: [
    new WebpackBarPlugin({
      color: COLOR,
      name: chalk.bold('GeekStudio'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webm)$/i,
        type: 'asset/resource'
      }
    ]
  },
};


module.exports = config;
