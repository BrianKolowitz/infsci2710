'use strict';

angular.module('myApp.project', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/project', {
    templateUrl: 'project/index.html',
    controller: 'ProjectCtrl'
  });
}])

.controller('ProjectCtrl', [function() {

}]);