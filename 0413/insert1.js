var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://192.168.56.3:27017/mydb';

MongoClient.connect(url, function(err, db){
    if(err){
        console.log("DB Cannot Connect."); return;
    }
    var movies = db.collection('Movies');
    //document추가
    movies.insert({title:'아바타',director:'제임스'},function(err,result){
        if(err){console.log(err);return;}
        console.log("insert Success");
        console.log(result);
    });
    
});

// insert Success
// { result: { ok: 1, n: 1 },
//   ops: [ { title: '아바타', director: '제임스', _id: 5ad029b19b74e31190f5d7bd } ],
//   insertedCount: 1,
//   insertedIds: [ 5ad029b19b74e31190f5d7bd ] }