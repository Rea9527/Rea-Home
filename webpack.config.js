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
  resolve: {
    fallback: path.join(__dirname, 'node_modules')
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
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          prefix: 'font'
        }
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
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {allChunks: true}),

    new webpack.optimize.CommonsChunkPlugin({
	    name: "vendor",
	    filename: "[name].js",
	    minChunks: function(module, count) {
        return (
          module.resource &&
          /\.js/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      },
	  }),
    
    new webpack.optimize.UglifyJsPlugin({
	    compressor: {
	      warnings: false
      },
      sourceMap: true
	  })
  ]
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
	    'process.env': {
	      NODE_ENV: '"production"'
	    }
	  }),
	  new webpack.optimize.CommonsChunkPlugin({
	    name: "vendor",
	    filename: "[name].js",
	    minChunks: function(module, count) {
        return (
          module.resource &&
          /\.js/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      },
	  }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),
	  
	]);
}