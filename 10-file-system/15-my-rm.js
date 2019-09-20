#!/usr/bin/node

const fs  = require('fs'),
      join = require('path').join,
      file = process.argv[2];

if(typeof(file)==='undefined'){
  console.error('请指定要删除的文件名或者目录名！');
  process.exit(1);
}

if(!fs.existsSync(file)){
  console.error('%s not exist!', file);
  process.exit(2);
}

if(fs.statSync(src).isFile())  fs.unlinkSync(file);

if(fs.statSync(src).isDirectory()) deleteDir(file);

function deleteDir(folder) {
  var files = fs.readdirSync(folder);

  for(var i=0; i<files.length; i++) {
    var file = join(folder, files[i]);

    if(fs.statSync(file).isFile()) {
      fs.unlinkSync(file);
      continue;
    }

    if(fs.statSync(file).isDirectory()) deleteDir(file);
  }

  fs.rmdirSync(folder);
} 
