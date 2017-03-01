'use strict';

var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('Sample Test\n');
})

app.listen(3000, function () {
  console.log('Server running at port 3000');
})