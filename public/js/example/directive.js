angular.module('example')
  .directive('ngInitFocus', function(){
     return {
		//ngInitFocus로 태그 이름이 element, 
		//example.html이 사용하고 있는 scope 
		link : function(scope, element) {
			//element[0] = 단일 태그기 때문에 0번째는 본인이다. 본인에 포커스를 넣어줌.
				element[0].focus();
			}
		}
	})
	//특정 디렉티브 호출하면 template을 출력해라!
	.directive('helloWorld', function(){
		return {
			restrict : 'E', // E : element, A : attribute, C : class, M : comment
			template : '<div><h3> Hello World!! </h3></div>'
		}
	})
	.directive('movie', function() {
		return {
			restrict : 'E',
			link : function (scope, element, attrs) {
				scope.username = attrs.username;
				scope.reputation = attrs.reputation;
				scope.img = attrs.img;
			},
			template : '<div><p><h3>영화소개</h3></p><p>Username : {{username}}</p> <p>reputation : {{reputation}}</p> <img src="{{img}}"> </div>'
		}
	})
	.directive('restricted', function(){
		return {
			restrict :  'A',
			link : function(scope, element, attrs) {
				var isAuth = Math.floor((Math.random() * 10) + 1) > 5;
				if(!isAuth) {
					element.css('display','none'); // style="display:none;"
				}
			}
		}
	})
	.directive('products', function() {
		return {
			restrict : 'E',
			link :  function(scope, element, attrs) {
				var products = [
				        {category : 'Watersports', description:'1인용 보트', name:'카약', price:'270000', id:1},
				        {category : 'Watersports', description:'보호 장비', name:'보호재킷', price:'48000', id:2},
				        {category : 'Soccer', description:'FIFA 규격의 무게', name:'축구공', price:'28000', id:3},
				        {category : 'Soccer', description:'Nike', name:'축구화', price:'160000', id:4},
				        {category : 'Soccer', description:'상,하의', name:'유니폼', price:'97000', id:5},
				        {category : 'BasketBall', description:'KBL 공식 지정구', name:'농구공', price:'56000', id:6},
				        {category : 'BasketBall', description:'2015 서울 StreetBall', name:'대회참가권', price:'20000', id:7},
				        {category : 'BasketBall', description:'조던 6', name:'농구화', price:'180000', id:8},
				        {category : 'BasketBall', description:'겨울용', name:'이너웨어', price:'46000', id:9}
				    ];

				    scope.products = products;
			},
			template : '<ul><li ng-repeat = "product in products">{{product.name}}</li></ul>'
		}
	})
	.directive('templateList', function(){
		return {
			link : function(scope, element, attrs) {

			},
			restrict : 'A',
			templateUrl : function(el, attrs) {
				// 바로 위 directive 인 products 에서 scope에 products 데이터를 넣어주므로 해당 데이터 활용.
				var defaultPath  = "../../html/";
				var templateName = (attrs['template'] === 'table') ? 'exampleTableTemplate.html' : 'exampleTemplate.html';
				return defaultPath + templateName;


			}
		}
		
	}) 

