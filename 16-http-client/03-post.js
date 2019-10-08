#!/usr/bin/node

const http = require('http'),
      url  = require('url'),
      log  = console.log;

var msg = process.argv[2] || 'Hello! I am wangding.';

var options = url.parse('http://localhost:8080');
options.method = 'POST';

var req = http.request(options, (res) => {
    //print start line
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

    //print response header
    log(res.headers);
    log('');
    //print response body
    res.pipe(process.stdout);
});

req.end(msg + '\n');
