#!/usr/bin/node

function circle(radius){
  function area(){
    return Math.PI * redius * radius;
  }

  function circum(){
    return 2 * Math.PI * radius;
  }

  return {
    area:area,
    circum:circum
  }
}

console.log(module);
module.exports = circle;
