'use strict';

angular.module('myApp.schedule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'schedule/index.html',
    controller: 'ScheduleCtrl'
  });
}])

.controller('ScheduleCtrl', [function() {

}]);