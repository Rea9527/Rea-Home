var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var errorHandler = require("errorhandler");
var envConfig = require('./env').config;

var index = require('./src/server/routes/index');
var app = express();


// configuration
var env = envConfig.NODE_ENV || 'dev';
if (env === 'dev') {
	var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var WebpackConfig = require('./webpack.config');
    app.use(errorHandler());
    app.use(webpackDevMiddleware(webpack(WebpackConfig), {
        publicPath: '/dist/',
        stats: {
          colors: true
        }
    }));
    app.set('views', __dirname + '/src/pages');
} else {
	app.set('views',  __dirname + '/src/');
}

// view
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname));

app.get('/', index);

// lister
app.listen(envConfig.PORT, function() {
	console.log('The server is listening on port ' + envConfig.PORT);
});

exports.App = app;