angular.module('book')
    .controller('bookListCtrl', function($scope, $filter){
        var selectedGrade = 0;
        //grade : 좌측 카테고리 
        $scope.selectGrade = function(grade){
            selectedGrade = grade;
        }

        $scope.gradeFilterFn = function(book){
            return selectedGrade == 0 || (book.grade >= selectedGrade && book.grade < selectedGrade+1);
        }
    });