const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module:{
    rules: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      }
    },
    {
      test: /\.scss$/,
      use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
    },
    {
      test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]'
              //outputPath: path.resolve(__dirname, 'docs/fonts')
          }
      }]
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loader: 'image-webpack-loader',
      enforce: 'pre',
      options: {
        disable: false
        //outputPath: path.resolve(__dirname, 'docs/images')
      }
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      exclude: /node_modules/,
      loader: 'url-loader',
      options: {
        limit: 8192
        //outputPath: path.resolve(__dirname, 'docs/images')
      }
    },
    {
      test: /\.(html)$/,
      use: [{
        loader: 'html-loader'
      }]
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(
      {filename: 'style.css'}
    ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};