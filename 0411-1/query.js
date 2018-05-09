/**
 * query.js
 */
var pool = require('./dbConn');

pool.getConnection(function(error, conn){
	if(error){
		console.log(error); return;
	}
	var sql = "CREATE TABLE world.Member(id INT AUTO_INCREMENT, " +
	               "name VARCHAR(20), PRIMARY KEY(id))";
	conn.query(sql);
	sql = "INSERT INTO Member(name) VALUES('한지민');";
	conn.query(sql);
	sql = "INSERT INTO Member(name) VALUES('조용필');";
	conn.query(sql);
	sql = "INSERT INTO Member(name) VALUES('이미자');";
	conn.query(sql);
	
	sql = "SELECT * FROM Member";
	conn.query(sql, function(error, results, fields){
		if(error){
			console.log(error); return;
		}
		console.log(results);
	});
	conn.release();
});




