
angular.module('customFilter')
    .filter('grade', function(){
        return function(data){
            if(angular.isArray(data)){
                var results = [];
                var grades = {};

                for(var i=0;i<data.length;i++){
                    var grade = parseInt(data[i].grade);
                    if(angular.isUndefined(grades[grade])){
                        grades[grade] = true;
                        results.push(grade);
                    }
                }
                return results;
            }else{
                return data;
            }
        }
    });