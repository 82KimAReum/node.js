//async2.js
var async=require('async');
var fs=require('fs');
async.waterfall([
    function readData(callback){
        fs.readFile('./mydata.txt','utf8',function(err,contents){
            callback(err,contents);
        });
    },
    function replaceData(data,callback){
       var res = data.replace(/orange/ig,'PineApple');//i는 대소문자 가리지 않음
       callback(null,res);
    },
    function writeData(repl,callback){
        fs.writeFile('./mydata.txt',repl,function(err,contents){
             callback(null,'replace success');
        });
       
    }

],function(error,results){
    if(error){
        console.loge(error);return;
    }
    console.log(results);
})

// C:\NodeJSHome\0330>type mydata.txt
// Apple
// Peach
// Orange
// Cherry
// Grape

// C:\NodeJSHome\0330>node async2.js
// replace success

// C:\NodeJSHome\0330>type mydata.txt
// Apple
// Peach
// PineApple
// Cherry
// Grape