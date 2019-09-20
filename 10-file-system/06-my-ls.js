#!/usr/bin/node

const fs  = require('fs'),
      dir = process.argv[2] || __filename;
try{
  console.log(fs.readdirSync(dir));
}catch(e){
  console.log(e.message);
  process.exit(1);
}
