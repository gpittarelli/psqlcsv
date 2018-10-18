#!/usr/bin/env node
var pg = require('pg');
var QueryStream = require('pg-query-stream');
var stringify = require('csv-stringify');
var client = new pg.Client();

var query = new QueryStream(process.argv.slice(2).join(' '), []);

client
  .connect()
  .then(() => {
    var stream = client.query(query);
    stream.pipe(stringify({header: true, quoted: true})).pipe(process.stdout);
    return new Promise(resolve => stream.on('end', resolve));
  })
  .catch(function (e) { console.error(e); })
  .then(function () { return client.end(); });
