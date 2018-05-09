var readline= require('readline');

var myread = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  myread.setPrompt('>');//사용에게 보여지는것 
  myread.prompt();//실제로 사용자의 입력을 기다림
myread.on('line',function(input){
    //'line' 사용자가 엔터치면
    if(input=='exit'){myread.close();}
    console.log(input);//찍고
    myread.prompt();//커서대기
});
myread.on('close',function(){
    process.exit(0);
})


// C:\NodeJSHome\0328>node readline1.js
// >호로로로로로로로롤
// 호로로로로로로로롤
// >exit