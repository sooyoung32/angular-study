angular.module('hello', [])
    //$... 의존성 주입 
    .controller('HelloController', function($scope, $filter, $http){
        $scope.hello = {
            msg : 'hello.'
        };

        $scope.toUpper = function(){
            $scope.hello.msg = $filter('uppercase')($scope.hello.msg);
        };

        $scope.items = [
            {
                title : '볼펜',
                count : 4,
                price : 1800
            },
            {
                title : '지우개',
                count : 1,
                price : 800
            },
            {
                title : '연필',
                count : 12,
                price : 400
            }
        ];

        $scope.remove = function(index){
            $scope.items.splice(index, 1);
        };

        $scope.loadData = function() {
            $http.get('/hello/data').success(function(data){
                $scope.products = data;
            });

        };

        $scope.pushData = function(product) {
            $http.post('/hello/data',product)
            .success(function(data) {
                if(data) {
                    alert('data is added');
                    $scope.products.push(product);
                    $scope.product = {};
                } else {
                    alert('data can not be added');
                }
            })
            .error(function(data, status) {
                alert(data + '' + status);
            });

        };

        $scope.pushData2 = function(product) {
            $http.post('/hello/data' , product)
                 .then(function(data) {
                    if(data) {
                        alert('data is added');
                        $scope.products.push(product);
                        $scope.product={};
                    }else{
                        alert('data is not added');
                    }
                 },function(response) {
                    if (response.status === 500) {
                        alert('server error. please try again');
                    } else if (response.status === 404) {
                        alert('url is wrong');
                    } else {
                        alert('unknown error \n' + response.data);
                    }
                });       
        };
    });