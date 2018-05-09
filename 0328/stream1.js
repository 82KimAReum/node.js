var fs =require('fs');
var os = fs.createWriteStream('./output.txt');
os.on('finish',function(){
    console.log('finish envent');

});
os.write('hello\n');
os.write('hihihihihihihi');

os.end();
// C:\NodeJSHome\0328>node stream1.js
// finish envent

// C:\NodeJSHome\0328>type output.txt
// hello
// hihihihihihihi
