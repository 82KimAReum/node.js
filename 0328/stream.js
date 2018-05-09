var fs=require('fs');

var rs = fs.createReadStream('stream.js');//readable Stream생성
rs.on('readable',function(){
    console.log('READABLE EVENT');
    var chunk=null;
    while(chunk =rs.read(10)){//10byte읽고 찍기
         console.log(chunk.toString('utf8'));
    };
    
 });  

//  C:\NodeJSHome\0328>node stream.js
// READABLE EVEN
// var fs=req
// READABLE EVEN
// uire('fs')

// C:\NodeJSHome\0328>node stream.js
// READABLE EVEN
// var fs=req
// uire('fs')
// ;

// var r
// s = fs.cre
// ateReadStr
// eam('strea
// m.js');//r
// eadable St
// ream생성
///.....