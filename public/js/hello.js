angular.module('hello', [])
    //$... 의존성 주입 
    .controller('HelloController', function($scope, $filter, $http, $timeout, $q){
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
        //promise 이용 
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

        $scope.result=false;
        $scope.showQuiz = function(){
            $scope.result = true;
            var promiseObj = $timeout(function(){
                return $scope.answer;
            }, 3000);

            promiseObj.then(function(input){
                if (input == 39) {
                    $scope.result=true;
                    $scope.msg="정답!";
                }else{
                    $scope.result=false;
                    $scope.msg="틀렸어요ㅠㅠ";
                }
                $scope.info = "다시 시작하려면 refresh 해주세요";

            });

        };
        
        $scope.promiseTest = function(number){
            var defer = $q.defer();
            defer.promise
                 .then(function(){
                    //return을 써줘야 순차적으로 진행된다. 지우면 일반 비동기처럼 실행됨.
                    //promise는 return이 있다면 앞에 작업이 끝날때까지 뒤에 작업이 기다린다. 
                    return $timeout(function(){
                        alert('asyncA');
                    }, 3000);
                 })
                 .then(function(){
                    return $timeout(function(){
                        alert('asyncB');
                    }, 1000);
                 });
                 //return 값으로 특정 값을 넣으면 ex 1, aaa 그 다음 promise의 함수의 변수로 받을수 있다.
                 /**
                   .then(function(){
                    return 1;
                 })
                 //num으로 받을수 있음.
                 .then(function(num){
                    return $timeout(function(){
                        alert('asyncB');
                    }, 1000);
                 });
                 */
            defer.resolve();
        };

        //$scope.promiseTest();

        /*
            promise quiz 
            1) async A 실행 후 async B
            2) 1)과 별도로 2초뒤 alert 하는 asyncC 진행
            3) 모든 실행후 alert(끝났다.)
            a시작 혹은 c 시작 
            -> asyncC ->asyncA -> asyncB ->끝났다
        */

        $scope.promiseQuiz = function() {
            var defer = $q.defer();
            defer.promise.then(asyncA)
                         .then(asyncB);
                        //  .then(asyncB)
                        //  .then(function(){
                        //     alert('Finished!')
                        // });
            $q.all([defer.resolve(), asyncC()])
               .then(function(){
                   console.log('끝!!');
               })
            defer.resolve();
        };

        $scope.promiseQuiz();

        function asyncA() {
            //alert('a시작');
            console.log('A시작');
            return $timeout(function(){
                console.log('A!!')
                //alert('asyncA');
            }, 3000);
        }
        function asyncB() {
            //alert('b시작');
            console.log('b시작');
            return $timeout(function(){
                console.log('B!!')
                //alert('asyncB');
            }, 1000);
        }
        function asyncC() {
            //alert('c시작');
            console.log('c시작');
            $timeout(function() {
                console.log('C!!')
                //alert('asyncC');
            }, 2000);
        }





        
    });