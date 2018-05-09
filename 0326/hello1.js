var fs=require('fs');

var contents=fs.readFile('hello1.js','utf-8',
                                    function(error,contents){
                                        if(error){
                                            return  console.log(error);
                                        }
                                        console.log(contents);
                                    });
console.log('reading files....');