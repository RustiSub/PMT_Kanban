'use strict';

function allowDrop(ev)
{
  ev.preventDefault();
}

function drag(ev)
{
  ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
  ev.preventDefault();
  var data=ev.dataTransfer.getData("Text");

  var parentElement = $(ev.target).closest('ul');
  var dataElement = $('#' + data);

  parentElement.append(dataElement);
}

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
        'id': i,
        'title': 'Ticket ' + i,
        'description': 'Dit is een ng beschrijving ' + i
      }
    );
  }
});
