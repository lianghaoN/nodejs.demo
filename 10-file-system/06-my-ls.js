#!/usr/bin/node

const fs  = require('fs'),
      dir = process.argv[2] || __filename;

console.log(fs.readdirSync(dir));
