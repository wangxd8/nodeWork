/*读取文件目录*/
var fs = require('fs');
var path = require("path");

/*var path = require('path');*/

var fileName = './db';
var fileData = fs.readdirSync(fileName);//异步读取文件目录
var objArray = [];

for(var i=0;i<fileData.length;i++){
	var obj ={};
	obj.name=fileData[i];
	obj.link = '/content?'+fileData[i];
	objArray.push(obj);
};
module.exports = objArray;
