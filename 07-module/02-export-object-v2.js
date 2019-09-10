#!/usr/bin/node

function area (radius){
  return Math.PI * radius* radius;
};

function circum (radius){
  return 2*Math.PI*radius;
};

function diameter (radius){
  return 2*radius;
};

console.dir(module);
module.exports.area = area;
module.exports.circum=circum;
