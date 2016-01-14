angular.module('money-book',[])
.controller('MoneyBookController', function($scope, $filter, $http){
	$scope.moneyBooks = [];

	$scope.loadData = function() {
        $http.get('/money_book/data').success(function(data){
        	$scope.moneyBooks = data;
          console.log($scope.moneyBooks)
       	});
   	};

   	$scope.getTotal = function() {
   		var total = 0;
      for(var i = 0; i < $scope.moneyBooks.length; i++) {
   			var moneyBook = $scope.moneyBooks[i];
   			total = total + parseInt(moneyBook.money);
   		}
   		return total;
   	}


   $scope.pushData = function(moneyBook) {
      $http.post('/money_book/data',moneyBook)
      .success(function(data) {
        if(data) {
            moneyBook['date'] = new Date().toDateString();
            console.log('moneybook : '+moneyBook.date)
            alert('data is added');
            $scope.moneyBooks.push(moneyBook);
            $scope.moneyBook = {};
        } else {
            alert('data can not be added');
        }
      })
     .error(function(data, status) {
         alert(data + '' + status);
     });

  };

});

