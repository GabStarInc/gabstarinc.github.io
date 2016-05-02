var saleAppServices = angular.module('saleAppServices', ['ngResource']);

saleAppServices.factory('Products', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);