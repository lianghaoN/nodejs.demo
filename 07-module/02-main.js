#!/usr/bin/node
/*
const p = require('./02-export-var.js');

console.dir(module);
console.log(p);*/
/*
const circle = require('./02-export-function.js');

console.log('r=10,circle area:%d',circle(10).area);
console.log('r=10,circle circum:%d',circle(10).circum);
console.log(module);*/
/*
const circle = require('./02-export-object.js'),
      log = console.log;


log('r=10,circle diameter:%d',circle.diameter(10));
log('r=10,circle area:%d',circle.area(10));
log('r=10,circle circim:%d',circle.circum(10));
*/


var circle = require('./02-export-object-v2.js');

console.log('%d',circle.area(10));
console.log('%d',circle.circum(10));
