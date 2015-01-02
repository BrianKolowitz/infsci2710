'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.syllabus',
  'myApp.project',
  'myApp.materials',
  'myApp.schedule',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/syllabus'});
}]);
