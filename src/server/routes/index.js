var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Rea\'s Homepage', subTitle: '首页'});
});

router.get('/blog', function(req, res, next) {
	res.render('blog', { title: 'Rea\'s Homepage', subTitle: '博客'});
});

router.get('/newBlog', function(req, res, next) {
	res.render('new-blog', { title: 'Rea\'s Homepage', subTitle: '新博客'})
})

module.exports = router;