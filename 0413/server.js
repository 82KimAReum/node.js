var MongoClient = require('mongodb').MongoClient;
//ver.2,3둘다 가능
 
// Connection URL
var url = 'mongodb://192.168.56.3:27017';
 
// Database Name
var dbName = 'mydb';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if(err){
      console.log(err);return;
  }
  console.log("Connected successfully to server");
  var db = client.db(dbName);
  console.log(client);
});
