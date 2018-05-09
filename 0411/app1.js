/**
 * app1.js
 * 
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'world'
});
 
connection.connect(function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log('connection success');
	connection.end();
});
 
