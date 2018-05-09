/**
 * connect.js
 */
var mongodb= require('mongodb');
var db= null;
try{
	var server=new mongodb.Server('192.168.56.3',27017,{auto_reconnect:true});
	console.log('server connection Success');
	db = new mongodb.Db('test',server);
	db.open(function(err,db){
		if(err){throw err;}
		console.log('test data base Connection Success');
	});
}catch(err){
	console.log(err);
}

module.exports =db;