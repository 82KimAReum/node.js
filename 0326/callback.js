var fs=require('fs');

var mycontents;

function mytest(cb){
    fs.readFile('callback.js',encoding= 'utf-8', function (error,contents){
    if(error)console.log(error);
    mycontents=contents;
    cb();

    });
};
function myfunction(){
    console.log(mycontents);

}
mytest(myfunction);
console.log('reading file');

