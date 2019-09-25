#!/usr/bin/node

const cp = require('child_process');


console.log(process.pid);

var child = cp.fork('./04-fork.js');

global.setInterval(function(){
  console.log(Date.now());
},2000)

global.setTimeout(function(){
  console.log('bye');
  process.exit(1);
},5000);

process.on('message',function(msg){
  console.log(msg);
  process.exit(1);
})
