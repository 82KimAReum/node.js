//async4.js
var async=require('async');
var fs=require('fs');
async.parallel({
    one: function (callback){
        fs.readFile('./mydata.txt','utf8',function(err,contents){
            callback(err,contents);
        });
    },
    two: function (callback){
        fs.readFile('./mydata1.txt','utf8',function(err,contents){
            callback(err,contents);
        });
    },
    three: function (callback){
        fs.readFile('./mydata2.txt','utf8',function(err,contents){
            callback(err,contents);
        });
    }

},function(error,results){
    if(error){
        console.loge(error);return;
    }
    console.log(results);
})
//실행할때마다 다른 값나옴 
// C:\NodeJSHome\0330>node async4.js
// { one: 'Apple', three: 'Grape', two: 'Orange' }

// C:\NodeJSHome\0330>node async4.js
// { one: 'Apple', two: 'Orange', three: 'Grape' }