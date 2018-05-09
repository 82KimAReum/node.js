//insert2.js
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://192.168.56.3:27017/mydb';

MongoClient.connect(url, function(err, db){
    if(err){
        console.log("DB Cannot Connect."); return;
    }
    var movies = db.collection('Movies');
    movies.insertMany(
        [
            {title:'리틀포레스트',year:2018},
            {title:'오아시스',director:'이창동'}
        ]
    ).then(function(results){
        console.log('insert Success');
    },function(err){
        console.log(err);
    });
    
});
