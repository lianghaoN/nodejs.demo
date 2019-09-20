#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;
try{
  var source = fs.createReadStream(file);

  source.pipe(process.stdout);

  source.on('error',function(err){
    console.log(err.message);
  });
}
catch(e){
  console.log(e.message);
  process.exit(1);
}
