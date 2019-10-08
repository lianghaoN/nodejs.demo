#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  log('${req.method} ${req.url} HTTP/${req.httpVersion}');
  log(req.headers);

  log('Host:', req.headers.host);                    
  log('User-Agent:', req.headers['user-agent']);      
  log('Content-Type:', req.headers['content-type']);

  req.pipe(process.stdout);

  var html =''
  +'<!DOCTYPE html>'
  +'<html lang="en">'
  +'<head>'
  +'    <meta charset="UTF-8">'
  +'    <title>Document</title>'
  +'</head>'
  +'<body>'
  +'<h1>hello</h1>'
  +'</body>'
  +'</html>';

  if(req.url === '/'){
    // 200 ok
    res.writeHead(200,{"Content-Type":'text/html','Content-Length':Buffer.byteLength(html.length,'utf8')});
    res.end(html);
  }else{
    //404 not found
    res.statusCode=404;
    res.setHeader('Content-Type','text/plain');
    res.end('error');
  }
}).listen(8080);
