var fs= require('fs');
var is = process.stdin;//키보드를 통한 표준 입력

var os = fs.createWriteStream('./output.txt');
is.pipe(os);//pipe: readStream에서 writeStream으로 연결해 줌 

// C:\NodeJSHome\0328>node stream2.js
// 히히히힣
// 히힣히힣ㅎ
// hi
// whllo
// morning
// ^D^C
// C:\NodeJSHome\0328>type output.txt
// ?덊엳?덊옡
// ?덊옡?덊옡??
// hi
// whllo
// morning
// C:\NodeJSHome\0328>