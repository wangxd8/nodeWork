/**
 *接收客户端的post请求
 **/

/**
 * express
 * 模板解析 静态文件服务 中间件 路由
 * 还可以很方便的跟第三插件进行集成
 * npm install express
 */
var express = require('express');
var app = express();
var fs = require('fs');
var datas = require('./data');
var mysql = require('mysql');
app.set('view engine','html');
//设置模板存放目录
var path = require('path');
app.set('views',path.join(__dirname,'/'));
app.engine('.html',require('ejs').__express);
var multer = require('multer');
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer());

//链接数据库
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    port: 3306
});
conn.connect();

var events  = require('events');
var emitter = new events.EventEmitter();
//监听 路径 为/的 get请求
app.get('/',function(req,res){
    res.render('index',{"tip":"请输入你的用户名和密码就行登陆"});
});
app.get('/logout',function(req,res){
    res.render('form2');
});
app.get('/register',function(req,res){
	res.render("register");
});
app.post('/post',function(req,res){
	var username = req.body.username;
	var pwd = req.body.pwd;
  var selectSql = 'SELECT * FROM USER WHERE name= "'+username+'" and pwd="'+pwd+'"';
  conn.query(selectSql, function(err, rows, fields) {
    if (err) throw err;
	  if(rows.length>0){
	  	res.render("success");
	  }else{
	  	res.render("index",{"tip":"用户名或密码错误，请重新登陆"});
	  }
	});
});
app.post("/regPost",function(req,res){
	var username = req.body.username;
	var pwd = req.body.pwd;
	var dd = datas.insertData(username,pwd);
	res.render("index",{"tip":"注册成功，请登陆"});
});
app.get('*',function(req,res){
    res.send('404');
});

app.listen(8080);