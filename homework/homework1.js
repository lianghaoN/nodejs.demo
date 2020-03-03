#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2],
      dirs = process.argv[3],
      log = console.log;

try{
  if(dir === 'list'){
    function filelist(fileName,fileSize){
      var f = new Object();
      f.fileName = fileName;
      f.fileSize = fileSize;
      return f;
    }
    var arry = [];
    for(let i=0;i<fs.readdirSync(__dirname).length;i++){
      fs.stat(fs.readdirSync(__dirname)[i],(err,stats)=>{
        if(err){
          callback(err);
        }else{
          arry[i] = filelist(fs.readdirSync(__dirname)[i],stats.size);
        }
        const json = JSON.stringify(arry);
        if(i==fs.readdirSync(__dirname).length-1) log(json);
      });
    }
  }
  else if(dir === 'mkdir'){
    fs.writeFileSync(dirs,'');
  }else{
    log('请输入正确的参数！');
  }
}catch(e){
  log(e.message);
  process.exit(1);
}
