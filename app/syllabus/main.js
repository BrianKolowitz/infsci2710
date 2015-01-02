'use strict';

angular.module('myApp.syllabus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/syllabus', {
    templateUrl: 'syllabus/index.html',
    controller: 'SyllabusCtrl'
  });
}])

.controller('SyllabusCtrl', [function() {

}]);