var http=require('http');
var server=http.createServer(mylistener);
function mylistener(request,response){
    console.log('mothod: ',request.method);
    console.log('Url: ',request.url);
    console.log('http version: ',request.httpVersion);
    console.log('--Headers--: ');
    console.log(request.headers);
    response.end('hello');

}
server.listen(9999);

// mothod:  GET
// Url:  /
// http version:  1.1
// --Headers--:
// { host: 'localhost:9999',
//   connection: 'keep-alive',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
//   cookie: 'io=RmMsaadCy-K3eAcKAAAE' }
// mothod:  GET
// Url:  /favicon.ico
// http version:  1.1
// --Headers--:
// { host: 'localhost:9999',
//   connection: 'keep-alive',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
//   accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
//   referer: 'http://localhost:9999/',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
//   cookie: 'io=RmMsaadCy-K3eAcKAAAE' }