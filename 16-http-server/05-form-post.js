#!/usr/bin/node
const http = require('http'),
      log = console.log,
      qs = require('querystring');
var items =['eat'];
http.createServer((req,res)=>{
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    log('');
    
  req.pipe(process.stdout);

  var html =''
  +'<!DOCTYPE html>'
  +'<html lang="en">'
  +'<head>'
  +'    <meta charset="UTF-8">'
  +'    <title>TODO List</title>'
  +'</head>'
  +'<body>'
  +'<h1>TODO List</h1>'
  +'<ul>'
  + items.map(function(it){return '<li>'+it+'</li>';}).join('\n')
  +'</ul>'
  +'<form method="POST" action="/">'
    +'<input type="text" name="item">'
    +'<input type="submit" value="提交">'
  +'</form>'
  +'</body>'
  +'</html>';

  if(req.method ==='GET' && req.url === '/'){
    // 200 ok
    res.writeHead(200,{
      "Content-Type":'text/html','Content-Length':Buffer.byteLength(html.length,'utf8')
    });
    res.end(html);
  }else if(req.method === 'POST' && req.url == '/'){
    //submit data
    var it ='';
    req.on('data',(data)=>{
      it =+ data;
    });
    req.on('end',()=>{
      if(typeof it !== 'undefined'){
        items.push(it);
      }else{
        res.end('error!');
      }
    })

    res.end(html);
  }
}).listen(8080);

function getHTML(){
  return '';
}
