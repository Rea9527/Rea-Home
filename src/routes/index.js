var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Rea\'s Homepage', subTitle: '首页'});
});

module.exports = router;