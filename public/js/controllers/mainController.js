var mainController = angular.module('mainController', []);

mainController.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.title = 'Dante\'s Construction';

}])
