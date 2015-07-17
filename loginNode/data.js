var mysql = require('mysql');
var events  = require('events');
var emitter = new events.EventEmitter();

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    port: 3306
});

conn.connect();

var userData=null;
var datas= conn.query("SELECT * FROM USER WHERE name='wang'", function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    emitter.emit('userDatas',rows);
});


exports.insertData = function(username,pwd){ 
	var insertSql = 'insert into user(name,pwd) values("'+username+'","'+pwd+'")';
	conn.query(insertSql, function(err, rows, fields) {
	    if (err) throw err;
	    console.log(rows);
	});
};
/*conn.end();*/
