var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function(req, res){
    // res.sendFile(path.join(__dirname + '/public/html/index.html'));
    res.sendFile(path.join(__dirname + '/public/html/hello.html'));
});

// app.get('/hello', function(req, res){
//     res.sendFile(path.join(__dirname + '/public/html/hello.html'));
// });

var items = [
    { title: '볼펜', count: 4, price: 1800 },
    { title: '지우개', count: 1, price: 800 },
    { title: '연필', count: 12, price: 400 },
    { title:'필통', count:3, price:2800 }
];



app.get('/hello/data', function(req,res) {
    // var items = [
    //         { title : '볼펜', count : 4, price : 1800 },
    //         {title : '지우개', count : 1,  price : 800},
    //         {title : '연필', count : 12, price : 400},
    //         {title : '필통', count : 3, price : 2800 }

    // ];
    res.json(items);
});

app.post('/hello/data', function(req, res, next){
      var body = req.body;    
      console.log('req body : ' + JSON.stringify(body));              
      
    if( !body.title ||  !body.count ||!body.price){
        next(new Error('빈값이 있다!'));
    } else{
        items.push(body);
        res.json(true);
    }
  }); 


var moneyBooks= [
    {date: '2016. 1. 11. 오후 8:25:39', description : '저녁식사', money :7000},
    {date: '2016. 1. 12. 오전 7:29:49', description : '아침식사', money :3800},
    {date: '2016. 1. 12. 오전 11:45:19', description : '점심식사', money :5500}
];

app.get('/money_book', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/money_book.html'));
});

app.get('/money_book/data', function(req, res){
    res.json(moneyBooks);
});

app.post('/money_book/data', function(req, res, next) {
    var body = req.body;    
    console.log('req body : ' + JSON.stringify(body));              
      
    if( !body.description ||!body.money){
        next(new Error('빈값이 있다!'));
    } else{
        moneyBooks.push(body);
        res.json(true);
    }

});




app.get('/todo', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/todo.html'));
});

app.get('/products', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/product.html'));
});
var data ={
    products : [
        {category : 'Watersports', description:'1인용 보트', name:'카약', price:'270000', id:1},
        {category : 'Watersports', description:'보호 장비', name:'보호재킷', price:'48000', id:2},
        {category : 'Soccer', description:'FIFA 규격의 무게', name:'축구공', price:'28000', id:3},
        {category : 'Soccer', description:'Nike', name:'축구화', price:'160000', id:4},
        {category : 'Soccer', description:'상,하의', name:'유니폼', price:'97000', id:5},
        {category : 'BasketBall', description:'KBL 공식 지정구', name:'농구공', price:'56000', id:6},
        {category : 'BasketBall', description:'2015 서울 StreetBall', name:'대회참가권', price:'20000', id:7},
        {category : 'BasketBall', description:'조던 6', name:'농구화', price:'180000', id:8},
        {category : 'BasketBall', description:'겨울용', name:'이너웨어', price:'46000', id:9}
    ]};

app.get('/product', function(req, res){
    res.send(data.products);
});

app.get('/books', function(req, res){
    res.sendFile(path.join(__dirname + '/public/html/book.html'));
});


app.listen(8080);
console.log('Express Listening on port 8080...');