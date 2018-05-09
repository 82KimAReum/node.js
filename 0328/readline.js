var readline= require('readline');

var myread = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  myread.question('What is your name? : ',function(answer){
      //한번만 물어볼수있음
      console.log("귀하의 이름은 %s이군요",answer);     
// C:\NodeJSHome\0328>node readline.js
// What is your name? : 김아름
// 귀하의 이름은 김아름이군요
        myread.close();
//안닫으면 계속 열려있음 
  })