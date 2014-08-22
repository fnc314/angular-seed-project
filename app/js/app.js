'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movies', {
    templateUrl: 'partials/movie-list.html',
    controller: 'movieListCtrl'});
  $routeProvider.when('/movies/:Title', {
    templateUrl: 'partials/movie-details.html',
    controller: 'movieDetailCtrl'});
  $routeProvider.otherwise({
    redirectTo: '/movies'});
}]);
