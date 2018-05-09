//find1.js

var mongodb = require('mongodb');

try{
    var server = new mongodb.Server('192.168.56.3', 27017, {auto_reconnect:true});
    var mydb = new mongodb.Db('mydb', server);
    mydb.open(function(err, db){
        if(err) throw err;
        var movies = mydb.collection('Movies');
        var ObjectId= require('mongodb').ObjectID;//Id만 읽어오는 거
        movies.findOne({_id: new ObjectId('5ad029b19b74e31190f5d7bd')})
        .then(function(result){
            console.log(result);

        },function(err){});
       
    });
}catch(err){
    console.log(err);
}

// { _id: 5ad029b19b74e31190f5d7bd, title: '아바타', director: '제임스' }