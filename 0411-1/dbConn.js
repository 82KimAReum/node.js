/**
 * dbConn.js
 */

var mysql      = require('mysql');
var connStr={
		connectionLimit : 10,
	  host            : 'localhost',
	  user            : 'root',
	  password        : '1234',
	  database        : 'world'
}
var pool  = mysql.createPool(connStr);

module.exports=pool;
