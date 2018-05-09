var os = require('os');

console.log(os.tmpdir());
//returns a string operating system's default directory for temporary files.
// C:\NodeJSHome\0328>node os.js
// C:\Users\chimi\AppData\Local\Temp

console.log(os.homedir());//C:\Users\chimi
console.log(os.type());//Windows_NT
console.log(os.release());//10.0.16299
console.log(os.totalmem());//8499732480//8기가
console.log(os.cpus());
console.log(os.platform());//win32