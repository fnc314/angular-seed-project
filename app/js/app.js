'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/movies', {
      templateUrl: 'partials/movie-list.html',
      controller: 'movieListCtrl'
    }).
    when('/movies/:imdbID', {
      templateUrl: 'partials/movie-detail.html',
      controller: 'movieDetailCtrl'
    }).
    otherwise({
      redirectTo: '/movies'
    });
  }]);
