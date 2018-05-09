var fs=require('fs');

var myoutput= fs.createWriteStream('myoutput.log');
//file writer
var myerror = fs.createWriteStream('myerror.log');

var Console = require('console').Console;
var mylogger =new Console(myoutput,myerror);

mylogger.info('this is information message');
mylogger.log('this is a simple log message');
mylogger.warn('this is a wiarning message');
mylogger.error('this is a sincer error message');