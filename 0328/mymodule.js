//mymodule.js
// module.exports.goodMorning =function(){
//     //class방식
// }
// module.exports.goodAfternoon =function(args,callback){
//     //생성자 방식
// }
// var my =require('./mymodule.js');
// my.goodMorning();
function MyBus(){
    this.take = function(){console.log('버스탑승');}
}
function MyTrain(){
    this.ride=function(){console.log('기차 탑승');}
}
module.exports.Bus=MyBus;
module.exports.Train=MyTrain;