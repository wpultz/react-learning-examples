var path = require('path');
var express = require('express');

var app = express();

app.get(['/'], function(req, res) {
  res.sendFile(path.join(__dirname, 'app.html'));
});

app.use('/bundles', express.static('bundles'))

console.log('app listening on port 8001')

app.listen(8001)
