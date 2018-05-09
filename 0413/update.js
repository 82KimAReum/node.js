//update.js
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://192.168.56.3:27017/mydb';

MongoClient.connect(url,function(err,db){
    //console.log(db);
    var mydb=db;
    var movies=mydb.collection('Movies');
    movies.updateOne({title:'아바타'},{$set:{title:'국산 아바타'}},function(err,result){
        if(err)return;
        console.log("update Success:" +result);
        mydb.close();
    });
});
//update Success:{"n":1,"nModified":1,"ok":1}

//$ db.Movies.find().pretty()
