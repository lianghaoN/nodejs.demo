#!/usr/bin/node
const http = require('http'),
      log = console.log,
      utl = require('url'),
      qs = require('querystring');
var items =[];
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
  +'<form methon="GET" action="/">'
    +'<input type="text" name="item">'
    +'<input type="submit" value="提交">'
  +'</form>'
  +'</body>'
  +'</html>';

  if(req.url === '/'){
    // 200 ok
    res.writeHead(200,{
      "Content-Type":'text/html','Content-Length':Buffer.byteLength(html.length,'utf8')
    });
    res.end(html);
  }else{
    var it = qs.parse(url.parse(req.url).query);
    if(typeof it !== 'undefined'){
      items.push(it);
    }

    res.end(html);
  }
}).listen(8080);

function getHTML(){
  return
}
