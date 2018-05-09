/**
 * app1.js
 */

var pool  = require('./dbConn');
pool.getConnection(function(err, conn) {
  if(err){
	  console.log(error);return;
  }
  console.log(conn);
  conn.query("select now()",function(error,results,fields){
	  console.log(results);
  })
  conn.release();//반납
  
});