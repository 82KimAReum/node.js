//step.js
var step=require('step');
var fs=require('fs');
step(
    function readData(){
        fs.readFile('./mydata.txt','utf8',this);
    },
    function replaceData(error,text){
        if(error){console.log('Error: ',error);return;}
       var res = text.replace(/naver/ig,'잉잉');//i는 대소문자 가리지 않음
       return res;
    },
    function writeData(error,newText){
        if(error){console.log('Error: ',error);return;}
        fs.writeFile('./mydata.txt',newText,function(err,contents){
             console.log('success');
        });
    }
);
// C:\NodeJSHome\0330>node step.js
// success

// C:\NodeJSHome\0330>type mydata.txt
// www.?됱엵.com
// www.daum.net
// www.google.co.kr