
//module 이름  : product , 외부 모둘은 쓰지 않는다 [] 
angular.module('product', ['customFilter'])
// product의 controller 이름 productCtrl 
// $scope는 전역 scope. 
// $scope.변수이름 = html 의 변수이름으로 선언된 것이 변경됨 
.controller('productCtrl', function($scope){
	$scope.data = {
		//배열 속성
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

	// $scope는 자바스크립트 객체. {}가 객체, []은 배열. 
	// 자바스크립트는 선언되어 있지 않은 속성이라도 자동으로 만들어짐. 자바스크립트는 동적언어기 때문. 
});