var estimateController = angular.module('estimateController', []);

estimateController.controller('estimateController', ['$scope', '$http', function($scope, $http){

  $scope.estimate = {};

  $scope.sendEstimate = function(){
    var estimate = $scope.estimate;
    console.log($scope.estimate.type);
    console.log($scope.estimate.time);
    // add validation
    // $http.post('/estimate', estimate).then(function(response){
    //   console.log(response.data);
    //   if(response.data){
    //     $scope.message = 'Message Sent!'
    //   } else {
    //     $scope.message = 'Something went wrong'
    //   }
    // })
  }


}]);
