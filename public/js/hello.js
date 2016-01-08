angular.module('hello', [])
    .controller('HelloController', function($scope, $filter){
        $scope.hello = {
            msg : 'hello.'
        }

        $scope.toUpper = function(){
            $scope.hello.msg = $filter('uppercase')($scope.hello.msg);
        }

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
        }
    });