#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  log('${req.method} ${req.url} HTTP/${req.httpVersion}');
  log(req.headers);
  
  var f1 ='';
  
  req.setEncoding('binary');
  req.on('data',(data)=>{
    f1 += data;
  });

  res.on('end',()=>{
    //parse f1
    //get file name
    log(f1.split('\r\n')[1]);
    //get file data
    log(f1.split('\r\n')[4]);
  });

  res.end('ok!');
}).listen(8080);

function getHTML(){
  //read html file
  var html = fs.readFileSync('todo.html').toString('utf-8');

  //write real data
  html.replace('%',item.map(function(item){return '<li>'+item+'</li>';}).join('\n'));
  
  //reurn html
}
