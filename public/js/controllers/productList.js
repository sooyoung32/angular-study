angular.module('product')
    .constant('productListActiveClass', 'btn-primary')
    .constant('productListPageCount', 3)
.controller('productListCtrl', function($scope, $filter, productListActiveClass, productListPageCount){
    var selectedCategory = null;

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function(newCategory){
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
    };

    $scope.selectPage = function(newPage){
        $scope.selectedPage = newPage;
    };

    $scope.categoryFilterFn = function(product){
        return selectedCategory == null || product.category == selectedCategory;
    };

    $scope.getCategoryClass = function(category){
        return (selectedCategory == category)? productListActiveClass : '';
    };

    $scope.getPageClass = function(page){
        return ($scope.selectedPage == page)? productListActiveClass : '';
    };

    $scope.shoppingList = [];

    $scope.addShoppingList = function (item) {
        $scope.shoppingList.push(item);
    };

    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.shoppingList.length; i++) {
            var item = $scope.shoppingList[i];
            total = total + parseInt(item.price);
        }
        return total;
    };


});