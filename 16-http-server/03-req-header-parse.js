#!/usr/bin/node
const http = require("http"),
      log = console.log;

http.createServer((req,res)=>{
  log('request headers:',req.headers);

  log('authourization:',req.headers.authourization);

  var auth = req.headers.authourization;

  if(typeof auth !== 'underfined'){
    auth = auth.split(' ');
    if(auth[0] === 'basic'){
      var buf = new Buffer(auth[1],'base64');
      log('usename & password:',buf.toString('utf8'));
    }
  }
  log('User-Agent:', req.headers['user-agent']);  
  res.end('hello world');
}).listen(8080);
