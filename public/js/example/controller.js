angular.module('example', [])
    .controller('ExampleController', function($scope){
        $scope.message = {
            text : '아무것도 클릭되지 않음'
        };

        $scope.clickUnfocused = function(){
            $scope.message.text = '포커스 X';
        };

        $scope.clickFocused = function(){
            $scope.message.text = '포커스 O';
        };
    });