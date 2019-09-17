#!/usr/bin/node
const http = require("http"),
      fs = require('fs');

http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return;
  console.log(req.url);
  var fileName = __dirname + req.url;
  res.end(fs.readFileSync(fileName));
}).listen(8080);

console.log(process.pid);
