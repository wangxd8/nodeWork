var express = require('express');
var url = require('url');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var userData = require('../collection/userdata');
var fileName = './db';
/* GET users listing. */
router.get('/', function(req, res, next) {
	var name =  req._parsedUrl.query;//获取url后面参数
	var readContent = fs.readFileSync("./db/"+name, "utf8");//读取文件
    res.render('content', { "userData":readContent });
});

module.exports = router;
 