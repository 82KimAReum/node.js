//insert.js
var mongodb = require('mongodb');

try{
    var server = new mongodb.Server('192.168.56.3', 27017, {auto_reconnect : true});
    var db = new mongodb.Db('Sample', server);
    db.open(function(err, db){
        if(err) throw err;
        var movie = db.collection('Movies');
        movie.insert({title : '리틀 포레스트', director:'임순례',
                             year : 2018});
        movie.insert({title : 'Star Wars'});
        movie.insert({director:'크리스토퍼 놀란', year : 2014});

        setTimeout(function(){
            movie.find({}, function(err, results){
                console.log(results);  db.close();
            })
        }, 100);
    });
}catch(err){
    console.log(err);
}