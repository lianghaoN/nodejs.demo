#!/usr/bin/node

const cp = require('child_process');

var cat = cp.spawn('cat',['deta.txt']),
    sort = cp.spawn('sort'),
    uniq = cp.spawn('uniq');

cat.stdout.pipe(process.stdin);
sort.stdout.pipe(process.stdin);
uniq.stdout.pipe(process.stdout);
