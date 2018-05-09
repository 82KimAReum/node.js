var fs= require('fs');

var contents= fs.readFileSync('hello.js','utf-8');
// 동기
console.log(contents);
console.log('reading file...');