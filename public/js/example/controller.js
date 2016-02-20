angular.module('example', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
                .when('/home' , {templateUrl: 'html/example/home.html'})
                .when('/prev' , {templateUrl: 'html/example/prev.html'})
                .when('/products' , {templateUrl: 'html/example/products.html'})
                .when('/save' , {
                    templateUrl: 'html/example/productForm.html'
                    , controller : 'EditController'
                })
                .when('/edit/:id' , {
                    templateUrl: 'html/example/productForm.html'
                    , controller : 'EditController'
                })
                .otherwise({redirectTo:'/home'})

    }).controller('ExampleController', function($scope, $location, $route, $routeParams){
        $scope.message = {
            text : '아무것도 클릭되지 않음'
        };

        $scope.clickUnfocused = function(){
            $scope.message.text = '포커스 X';
        };

        $scope.clickFocused = function(){
            $scope.message.text = '포커스 O';
        };

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

        $scope.products = products;



    }).controller('EditController', function ($scope, $route, $routeParams, $location) {

        $scope.product = {};
        $scope.cancelProduct = function(){
            $scope.product = {};
            $scope.path('/products')
        }

        $scope.saveProduct = function(product) {
        var isNew = true;
        for (var i = 0 ; i < $scope.products.length; i++) {
            if ($scope.products[i].id == product.id) {
                $scope.products[i] = product;
                $scope.product = {};
                isNew = false
                break;
            }
        }
        if(isNew) {
            product.id = $scope.products.length+1;
            $scope.products.push(product);
        }
        // product.id = $scope.products.length+1;
        // $scope.products.push(product);
        $location.path('/products')
        }

        // $on은 이벤트가 발생하면 함수를 실행해라. 
        // $route 는 사용할곳이 크게 두가지다. 1) route가 변하는 시점, 2) 새 경로 
        // @reouteChagneSuccess는 1)을 알려주고 
        // $location 은 2) 를 수행 한다.
        $scope.$on('$routeChangeSuccess', function() {
            if ($location.path().indexOf('/edit/')==0) {
                var id = $routeParams['id'];
                for (var i = 0; i < $scope.products.length; i++) {
                    if($scope.products[i].id == id) {
                        $scope.product = $scope.products[i];
                        break;
                    }
                }
            }
        })

    });