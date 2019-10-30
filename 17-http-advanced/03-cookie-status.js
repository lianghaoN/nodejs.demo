#!/usr/bin/node
const http = require("http"),
      log = console.log;

var total = 1;

http.createServer((req,res)=>{
  log('\n\n${req.method} ${erq.url} ${req.httpVersion}');
  log(req.headers);
  log();
  
  log('im required %d',total++);
  var count=1;
  if(typeof req.headers.cookie !== 'undefined'){
    var data = req.headers.cookie.split('=');
    count = Number(data[1] + 1);
  }

  res.statusCode=200;
  res.setHeader('Set-cookie', `count=${count}; max-age=10000000`);
  res.end(`you have visited ${count} times!`);
}).listen(8080);
