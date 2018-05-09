//delete.js
var mongodb=require('mongodb');

var server=new mongodb.Server('192.168.56.3',27017,{auto_reconnect:true});

var db=new mongodb.Db('mydb',server);
db.open(function(err,db){
    var movie= db.collection('Movies');
    movie.deleteOne({director:'이창동'},function(err,result){
        if(err){
            console.log(err);return;
        }
        console.log('delete success: '+result);//delete success: {"n":1,"ok":1}
    });
});