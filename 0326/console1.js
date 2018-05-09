//Custom Console
//1.
//var myconsole=require('console').Console;
//2.
var Console = require('console').Console;
var myconsole =new Console(process.stdout,process.stderr);
myconsole.log('hello');