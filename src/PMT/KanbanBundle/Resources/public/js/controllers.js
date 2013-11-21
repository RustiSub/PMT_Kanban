'use strict';

/* Controllers */

var boardApp = angular.module('boardApp', []);
boardApp.config(function($interpolateProvider){
      $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
);

boardApp.controller('TicketCtrl', function($scope, $http) {

  $scope.items = [];

  for (var i = 0; i < 10; i++) {
    $scope.items.push(
      {
        'title': 'Ticket ' + i,
        'description': 'Dit is een ng beschrijving ' + i
      }
    );
  }
});
