var util =  require('util');

// var su =5,num=9;
// console.log('%i + %d = %i',su, num,(su +num));
// console.log('%i - %d = %i',su, num,(su -num));
// console.log('%i x %d = %i',su, num,(su *num));
// console.log('%i / %d = %i',su, num,(su /num));
// console.log('%i %% %d = %i',su, num,(su %num));

// C:\NodeJSHome>node util.js
// 5 + 9 = 14
// 5 - 9 = -4
// 5 x 9 = 45
// 5 / 9 = 0
// 5 % 9 = 5
// C:\NodeJSHome>

function Parent(){}
function Child(){}

Parent.prototype.sayHello =function(){
    console.log("i'm parent sya helow method." );
}

util.inherits(Child,Parent);//상속

var child = new Child();
child.sayHello();

// C:\NodeJSHome>node util.js
// i'm parent sya helow method.
// C:\NodeJSHome>