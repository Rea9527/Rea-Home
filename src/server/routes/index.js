var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Rea\'s Homepage', subTitle: '首页'});
});

router.get('/Team:SYSU-CHINA', function(req, res, next) {
	res.render('index', { title: 'Rea\'s Homepage', subTitle: '博客'});
});

router.get('/Team:SYSU-CHINA/Overview', function(req, res, next) {
	res.render('Home/Overview', { title: 'Rea\'s Homepage', subTitle: '新博客'})
});

router.get('/Team:SYSU-CHINA/Project/Description', function(req, res, next) {
	res.render('Project/Description', { title: 'Rea\'s Homepage', subTitle: '新博客'})
});

router.get('/Team:SYSU-CHINA/Modeling', function(req, res, next) {
	res.render('Modeling/Modeling', { title: 'Rea\'s Homepage', subTitle: '新博客'})
});

module.exports = router;