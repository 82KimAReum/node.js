console.time('mytimer');
var sum =0;
for(var i=1; i<10000000000; i++){
    sum+=i;
}
console.log('sum = %d',sum);
console.timeEnd('mytimer');

// C:\NodeJSHome>node console2_.js
// sum = 499999500000
// mytimer: 4.418ms

// C:\NodeJSHome>node console2_.js
// sum = 49999999990067860000
// mytimer: 11065.724ms

// C:\NodeJSHome>
