//delete1.js
var mongodb=require('mongodb');

var server=new mongodb.Server('192.168.56.3',27017,{auto_reconnect:true});

var db=new mongodb.Db('mydb',server);
db.open(function(err,db){
    var movie= db.collection('Movies');
    movie.deleteMany({year: {$gte: 2015}})
    .then(function(result){
        console.log("success: "+result)
    },function(err){
        console.log('delete failure: '+err)
    });
    //success: {"n":1,"ok":1}
    db.close();
});