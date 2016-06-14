var app = angular.module('ETicketsApp', ['ngMaterial']);

app.service('tickets', function ($http) {
  this.getAll = function () {
    return $http.get('/mocks/tickets.json');
  };
});

app.controller('listCtrl', function ($scope, tickets) {
  $scope.tickets = [];
  $scope.basket = [];

  tickets.getAll().then(function (response) {
    $scope.tickets = response.data;
  });

  $scope.buy = function (id) {
    $scope.basket.push(id);
  }

  $scope.confirmOrder = function () {
    if (confirm('Are you sure to buy ' + $scope.basket.length + ' items?')) {
      alert('ok');
      // @todo add logic
    }
  }
});
