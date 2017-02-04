var path = require('path');
var express = require('express');

var app = express();

app.get(['/'], function(req, res) {
  res.sendFile(path.join(__dirname, 'app.html'));
});

app.use('/bundles', express.static('bundles'))

app.listen(8001)
