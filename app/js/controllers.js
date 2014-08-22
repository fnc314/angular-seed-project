'use strict';

/* Controllers */
var myAppCtrl = angular.module('myApp.controllers', []);

myAppCtrl.controller('movieListCtrl', function($scope, $http) {
  $http.get('movies/movies.json').success(function(data){
    $scope.movies = data;
  });
});
