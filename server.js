var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var api = require('./server/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/',api);

app.get('*'),(req, res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
}

var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);
server.listen(port, ()=>console.log("server is running"));