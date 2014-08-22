'use strict';

/* Controllers */
var myAppCtrl = angular.module('myApp.controllers', []);

myAppCtrl.controller('movieListCtrl', function($scope, $http) {
  $scope.search = function () {
    if ($scope.text) {
      $http.get('http://www.omdbapi.com/?s=' +
      $scope.text).success(function(data) {
        $scope.movies = data.Search;
      })
    } else {
      alert("Nothing Entered!!!");
      console.log("Nothing Entered");
    }
  }

  $scope.orderProp = "Title";
});

myAppCtrl.controller('movieDetailCtrl', function($scope, $http, $routeParams) {
  $http.get('http://www.omdbapi.com/?tomatoes=true&plot=full&i=' +
  $routeParams.imdbID).success(function(data) {
    $scope.movie = data;
  });
});

myAppCtrl.controller('movieSearchCtrl', function($scope, $http) {

});
