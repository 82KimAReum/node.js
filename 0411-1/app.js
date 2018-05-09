/**
 * app1.js
 * 
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.56.3',
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
	
});

connection.query('SELECT NOW(),VERSION()', function (error, results, fields) {
	  if (error) {
		  console.log(error);return;
	  }
	  // connected!
	  console.log(results);
	  
	  console.log(fields);
	});

connection.end();
