#!/usr/bin/node

const log =console.log;

var buf1 = new Buffer(256);

buf1[0]=0x11;

log('buf1 length:',buf1.length);
log('buf1:',buf1);

var buf2 = buf1.slice(250,256);
log(buf2);
log(buf2.toString());
log(JSON.stringify(buf2));

for(var i=0;i<buf1.length;i++){
  buf1[i]=i;
}

buf1.fill(0,0,256);
var arr = ['a',0xba,0xbf,0x00,255,10];
var buf3=new Buffer(arr);
log(buf3);

var buf4 = new Buffer('hello xxxxxx');
log(buf4);

buf4.copy(buf3,0,0,buf3.length);
log(buf3);

var str = '你好 lhao';
var buf5 = new Buffer(str);
log(buf5.length);
log(str.length);
