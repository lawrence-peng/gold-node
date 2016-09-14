var express = require('express');

// Constants
var PORT = 80;

// App
var app = express();

app.get('/', function (req, res, next) {
    res.json('hello docker');
    return next()
});

app.listen(PORT, function () {
    console.log('server is running,%s', 'http://::' + PORT)
});