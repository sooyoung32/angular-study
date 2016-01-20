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
     // set을 포스트 이전에 해줘야 함!!! 화면에서 받은 moneyBook에는 date라는 속성이 없다. 
     // 이곳은 더 화면의 데이터를 불러오기 전이라 시간이 더 정확하다
      moneyBook['date'] = new Date().toLocaleString();
      $http.post('/money_book/data',moneyBook)
      .success(function(data) {
        if(data) {
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

