#!/usr/bin/node
const http = require("http"),
      log = console.log;

http.createServer((req,res)=>{
  log('')
  log('request headers:',req.headers);
  log();
  
  switch(req.url){
    case '/admin':
      var auth = req.headers.authourization;
      if(typeof auth !== 'undefined'){
        var usr = getUserNamePws(auth);
        if(usr.usrname === 'wangding' && usr.password === '123'){
          showSecret(req,res);
        }else{
          showNormal(res);
        }
      }else{
        res.statusCode=401;
        res.setHeader('www-authenticate','basic');
        showNormal(res);
      }
      break;
    default :
      showNormal();
      break;
  }

  log('authourization:',req.headers.authourization);

  log('User-Agent:', req.headers['user-agent']);  
  res.end('hello world');
}).listen(8080);

funciton getUserNamePws(auth){
  if(typeof auth !== 'undefined'){
    var auth = auth.split(' ');
    if(auth[0] === 'Basic'){
      var buf = new Buffer(auth[1],'base64');
      var usr = buf.toString('utf8').split(':');
    }
  }

  return {
    userName: usr[0],
    passWord: usr[1]
  };
}

funciton showNormal(){
  res.send('Good day!');
}

funciton showSecret(){
  res.send('im tell mobile number 123123123');
}
