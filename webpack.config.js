var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	entry: {
		app: './src/main.js',
		//公共库
    vendor : [
      'vue',
      'vue-router',
      './env'
    ]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[id].[hash:8].js',
	  publicPath: '/dist/',
	},
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
	module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader') },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
	},
	devServer: {
    historyApiFallback: true,
    noInfo: true
  }
}

module.exports.devtool = 'source-map'
module.exports.plugins = (module.exports.plugins || []).concat([
  new ExtractTextPlugin("styles.css",{allChunks: true}),
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "[name].js",
    minChunks: Infinity,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
])