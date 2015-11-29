//자바 스크립트 객체 
// js 객체 : {} , 배열 [] 
var model = {
    user: '동욱',
    items: [
        { action: '출근하기', done: false }, 
        { action: '스터디 예습', done: true },
        { action: '도서 구매', done: false },
        { action: '데이트', done: true }
    ]
};


var todoApp = angular.module('todoApp', []);
todoApp.controller("TodoController", function($scope){
    $scope.todo = model;

    $scope.incompleteCount = function() {
    	var count = 0; 
    	angular.forEach($scope.todo.items, function(item) {
    		if(!item.done) {
    			count++;
    		}
    	});
    	return count;
    }

    $scope.warning = function() {
    	return $scope.incompleteCount() < 3 ? 'label-success' : 'label-warning';
    }

    $scope.addNewItem = function(action) {
    	$scope.todo.items.push({action:action, done:false});
    }

});