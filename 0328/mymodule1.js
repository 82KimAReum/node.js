//mymodule1.js
var  my = require('./mymodule.js');
var bus= my.Bus;
var mybus =new bus();
mybus.take();
// C:\NodeJSHome\0328>node mymodule1.js
// 버스탑승

var train= my.Train;
var mytrain= new train();
mytrain.ride();
// C:\NodeJSHome\0328>node mymodule1.js
// 버스탑승
// 기차 탑승