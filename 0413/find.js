//find.js
//cusor
//
var mongodb = require('mongodb');

try{
    var server = new mongodb.Server('192.168.56.3', 27017, {auto_reconnect:true});
    var mydb = new mongodb.Db('mydb', server);
    mydb.open(function(err, db){
        if(err) throw err;
        var movies = mydb.collection('Movies');
        var count=movies.count().then(function(count){
            console.log('count = '+ count);
        })
        //console.log(count);
        //2015년 이후 상영된 영화
        // movies.find(/*{year : {$gte : 2015}}*/).toArray(function(err, results){
        //     if(err) throw err;
        //     for (var i=0; i<results.length;i++){
        //         console.log(results[i].title + ',' + results[i]['year']+","+results[i]['_id']);
        //     }
        // });
    });
}catch(err){
    console.log(err);
}
//5ad029b19b74e31190f5d7bd
// C:\NodeJSHome\0413>node find.js
// 아바타,undefined,5ad029b19b74e31190f5d7bd
// 리틀포레스트,2018
// 오아시스,undefined