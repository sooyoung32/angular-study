//express 란 라이브러리 호출. 
//path 라느 라이브러리 호출.
//라이브러리 호출 
var express = require ('express');
var path = require('path');

//호출 
var app = express();

// 서버 설정
// 현재 디렉토리에 퍼블릭으로 한 폴더를 스태틱으로 올린다. 정적 파일 위치ㅣ
app.use(express.static(path.join(__dirname, 'public')));

//get 방식의 메소드, 주소는 / 호출디되면 펑션을 호출한다.
app.get('/', function(req, res) {
	//리스펀스에다 파일을 넣어주는데, 파일은 html 파일이다.
	//__dirname : 프로젝트 현제 디렉토리 
	res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.get('/todo', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/html/todo.html'));
});

app.get('/products', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/html/product.html'));
});

app.listen(8080);

//log 
console.log('Express Listening on port 8080...');