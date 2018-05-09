var url= require('url');
//console.log(url.parse('http://www.naver.com'))
// C:\NodeJSHome\0328>node url.js
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.naver.com',
//   port: null,
//   hostname: 'www.naver.com',
//   hash: null,
//   search: null,
//   query: null,
//   pathname: '/',
//   path: '/',
//   href: 'http://www.naver.com/' }

var str= 'http://www.naver.com:443/index.html?userid=aaaa&pwd=1234&username=한지민';
//console.log(url.parse(str,true)['query']['userid']);//true는 query가 json으로 뽑아줌 
var obj= url.parse(str,true);
// console.log(JSON.stringify(obj))
// console.log(obj.format());
// C:\NodeJSHome\0328>node url.js
// {"protocol":"http:","slashes":true,"auth":null,"host":"www.naver.com:443","port":"443","hostname":"www.naver.com","hash":null,"search":"?userid=aaaa&pwd=1234","query":{"userid":"aaaa","pwd":"1234"},"pathname":"/index.html","path":"/index.html?userid=aaaa&pwd=1234","href":"http://www.naver.com:443/index.html?userid=aaaa&pwd=1234"}
// http://www.naver.com:443/index.html?userid=aaaa&pwd=1234
var userid=obj.query.userid;
var pwd=obj.query['pwd'];

// C:\NodeJSHome\0328>node url.js
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.naver.com:443',
//   port: '443',
//   hostname: 'www.naver.com',
//   hash: null,
//   search: '?userid=aaaa&pwd=1234',
//   query: 'userid=aaaa&pwd=1234',
//   pathname: '/index.html',
//   path: '/index.html?userid=aaaa&pwd=1234',
//   href: 'http://www.naver.com:443/index.html?userid=aaaa&pwd=1234' }



