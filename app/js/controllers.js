'use strict';

/* Controllers */
var myAppCtrl = angular.module('myApp.controllers', []);

myAppCtrl.controller('movieListCtrl', function($scope, $http) {
  $http.get('movies/movies.json').success(function(data) {
    $scope.movies = data;
  });

  $scope.orderProp = "Title";
});

myAppCtrl.controller('movieDetailCtrl', function($scope, $http, $routeParams) {
  $http.get('http://www.omdbapi.com/?tomatoes=true&plot=full&i=' +
  $routeParams.imdbID).success(function(data) {
    $scope.movie = data;
  });
});
