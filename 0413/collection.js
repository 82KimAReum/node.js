//collection.js
var mongodb=require('mongodb');

try{
    var server = new mongodb.Server('192.168.56.3',27017,{
        auto_reconnect:true
    });
    var db= new mongodb.Db('Sample',server);
    db.open(function(err,db){
        if(err)throw err;
        db.createCollection('Movies');
        console.log("Movie collection creation success!!!!");
    })
}catch(err){
    console.log(err);
}