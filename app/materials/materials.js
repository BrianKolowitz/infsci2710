'use strict';

angular.module('myApp.materials', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/materials', {
    templateUrl: 'materials/index.html',
    controller: 'MaterialsCtrl'
  });
}])

.controller('MaterialsCtrl', [function() {

}]);