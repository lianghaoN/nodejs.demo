#!/usr/bin/node

const fs  = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

//src.pip(dst)
//src = fs.createReadStream
//dst = fs.createWriteStream
try{
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}catch(e){
  console.log(e.message);
  process.exit(1);
}
