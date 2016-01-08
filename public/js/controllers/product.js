angular.module('product',['customFilter'])
.controller('productCtrl', function($scope){
   $scope.data={
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
});