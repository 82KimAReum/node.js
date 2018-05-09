var mongodb=require('mongodb');

try{
    var server= new mongodb.Server('192.168.56.3',27017,{
        auto_reconnect:true
    });
    console.log('connection Success');
    var db=new mongodb.Db('Sample',server);
    db.open(function(err,db){
        if(err) throw err;
        console.log("Sample Database Open Success");
    })
}catch(err){
    console.log(err);
}