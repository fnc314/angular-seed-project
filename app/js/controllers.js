'use strict';

/* Controllers */
var myAppCtrl = angular.module('myApp.controllers', []);

myAppCtrl.controller('movieListCtrl', function($scope, $http) {
  $http.get('movies/movies.json').success(function(data) {
    $scope.movies = data;
  });
});

myAppCtrl.controller('movieDetailCtrl', function($scope, $http, $routeParams) {
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.imdbID + '&tomatoes=true&plot=full').success(function(data) {
    $scope.movie = data;
  });
});
