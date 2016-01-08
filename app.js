var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.get('/hello', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/hello.html'));
});

app.get('/todo', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/todo.html'));
});

app.get('/products', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/product.html'));
});

app.get('/books', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/book.html'));
});

app.listen(8080);
console.log('Express Listening on port 8080...');