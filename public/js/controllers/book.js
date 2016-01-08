
angular.module('book',['customFilter'])
    .controller('bookCtrl', function($scope){
        $scope.data={
            books : [
                {category : 'novel', grade: 4.7, name:'용의자x의 헌신', price:'27000', id:1},
                {category : 'novel', grade: 3.5, name:'빅피쳐', price:'18000', id:2},
                {category : 'comic', grade: 3.7, name:'소라의날개', price:'4800', id:3},
                {category : 'comic', grade: 2.8, name:'더파이팅', price:'4500', id:4},
                {category : 'comic', grade: 4.1, name:'H2', price:'3800', id:5},
                {category : 'essay', grade: 3.1, name:'혼자의 발견', price:'18000', id:6},
                {category : 'essay', grade: 4.0, name:'보통의 존재', price:'20000', id:7},
                {category : 'it', grade: 3.4, name:'소프트웨어장인', price:'18000', id:8},
                {category : 'it', grade: 2.9, name:'Pro Angular', price:'46000', id:9}
            ]};

        $scope.gradeToStar = function(count){
            var result='';
            if(angular.isNumber(count)){
                for(var i=0;i<count;i++){
                    result += '*';
                }
            }
            return result;
        }
    });