//console.log('endian:',require('os').endianness());
//어디서 부터 읽는지 
// C:\NodeJSHome\0328>node buffer.js
// endian: LE

var buf =new Buffer(6);//deprecated
buf.writeInt8(1,0);//int8 1byte 숫자 1을 0번째 부터
buf.writeUInt8(0xFF,1);//언사인드
buf.writeUInt16LE(0xFF,2);//2byte
buf.writeUInt16BE(0xFF,4);

//console.log('HEXA: '+buf.readInt8());
console.log(buf.readInt8(0));
console.log(buf.readUInt8(1));
console.log(buf.readUInt16LE(2));
console.log(buf.readUInt16BE(4));

// C:\NodeJSHome\0328>node buffer.js
// 1
// 255
// 255
// 255


