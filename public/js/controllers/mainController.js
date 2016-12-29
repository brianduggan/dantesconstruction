var mainController = angular.module('mainController', []);

mainController.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.navigate = 'Home';

  $scope.ourServ = [
    {
      src: 'http://www.fillmurray.com/800/400',
      capHead: 'Bill Murray 1',
      capBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      alt: 'a picture'
    },
    {
      src: 'http://www.fillmurray.com/800/401',
      capHead: 'Bill Murray 2',
      capBody: 'No lorem ipsum here',
      alt: 'a picture'
    },
    {
      src: 'http://www.fillmurray.com/801/401',
      capHead: 'Bill Murray 3',
      capBody: 'No lorem ipsum here',
      alt: 'a picture'
    }
  ]

  $scope.carousel = 0;
  $scope.indicator = 1;

  function indicate(){
    return $scope.indicator = ($scope.carousel + 1);
  }

  $scope.prev = function(){
    console.log('carousel: ' + $scope.carousel);
    if ($scope.carousel === 0){
      $scope.carousel = ($scope.ourServ.length - 1);
      indicate();
    } else {
      $scope.carousel -= 1;
      indicate();
    }
  }

  $scope.next = function(){
    console.log('carousel: ' + $scope.carousel);
    if ($scope.carousel === ($scope.ourServ.length - 1)){
      $scope.carousel = 0;
      indicate();
    } else {
      $scope.carousel += 1;
      indicate();
    }
  }

}]);
