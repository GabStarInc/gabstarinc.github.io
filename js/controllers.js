var salesApp = angular.module('salesApp', []);

salesApp.controller('salesAppCtrl', function($scope, $http) {
  $http.get('data/products.json')
       .then(function(res){
          $scope.products = res.data;                
        });
});