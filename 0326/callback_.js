var fs=require('fs');

//var mycontents;

fs.readFile('callback_.js',encoding= 'utf-8', myfunction);
function myfunction(error,contents){
   if(error)console.log(error);
    console.log(contents);

}
console.log('reading file');

