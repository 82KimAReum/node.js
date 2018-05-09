var dns= require('dns');
var options = {
    family: 4,
    hints: dns.ADDRCONFIG |dns.V4MAPPED,
    all:true
}
//dns.lookup(hostname[, options], callback)
dns.lookup('naver.com',options,function(err,address,family){
    if(err){console.log(err); return;}
    //console.log('address: %s, family : %d ',address,family);
    // C:\NodeJSHome\0328>node dns.js
    // address: 172.217.161.78, family : 4
   // console.log(address);
//     C:\NodeJSHome\0328>node dns.js
// [ { address: '210.89.160.88', family: 4 },
//   { address: '125.209.222.142', family: 4 },
//   { address: '125.209.222.141', family: 4 },
//   { address: '210.89.164.90', family: 4 } ]
} );

// dns.reverse('216.58.197.142',function(err,hostname){
//     if(err){console.log(err); return ;}
//     console.log(hostname);
//     //[ 'nrt12s01-in-f14.1e100.net', 'nrt12s01-in-f142.1e100.net' ]
// });

dns.resolve('google.com','MX',function(err,records){
    if(err){console.log(err); return ;}
    console.log(records);
    // C:\NodeJSHome\0328>node dns.js
// [ { exchange: 'alt2.aspmx.l.google.com', priority: 30 },
//   { exchange: 'aspmx.l.google.com', priority: 10 },
//   { exchange: 'alt3.aspmx.l.google.com', priority: 40 },
//   { exchange: 'alt4.aspmx.l.google.com', priority: 50 },
//   { exchange: 'alt1.aspmx.l.google.com', priority: 20 } ]
})