var mainController = angular.module('mainController', []);

mainController.controller('mainController', ['$scope', '$http', '$interval', '$timeout',function($scope, $http, $interval, $timeout){
  $scope.navigate = 'Home';

  var clearActiveNav = function(){
    var active = angular.element( document.querySelector( '.active' ) );
    if(active){
      active.removeClass('active');
    }
  }

  $scope.clickHome = function(){
    clearActiveNav();
    $scope.navigate = 'Home';
  }

  $scope.clickAbout = function(){
    clearActiveNav();
    var myEl = angular.element(document.getElementById('about-nav'));
    myEl.addClass('active');
    $scope.navigate = 'About';
  }

  $scope.clickEstimate = function(){
    clearActiveNav();
    var myEl = angular.element(document.getElementById('estimate-nav'));
    myEl.addClass('active');
    $scope.navigate = 'Estimate';
  }

  $scope.clickContact = function(){
    clearActiveNav();
    var myEl = angular.element(document.getElementById('contact-nav'));
    myEl.addClass('active');
    $scope.navigate = 'Contact';
  }

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
    },
    {
      src: 'http://www.fillmurray.com/801/402',
      capHead: 'Bill Murray 4',
      capBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      alt: 'a picture'
    },
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
    moveIndicator();
    $interval.cancel(interval);
  }

  var moveNext = function(){
    console.log('carousel: ' + $scope.carousel);
    if ($scope.carousel === ($scope.ourServ.length - 1)){
      $scope.carousel = 0;
      indicate();
    } else {
      $scope.carousel += 1;
      indicate();
    }
    moveIndicator();
  }

  $scope.next = function(){
    moveNext();
    $interval.cancel(interval);
  }

  var interval = $interval(moveNext, 2000);

  var drawIndicator = function(){
    var indicators = $scope.ourServ.length;
    var elem = document.querySelector('#indicator');
    var myEl = angular.element(elem);
    var margin = '0 1%';
    var width = ((98 - (2*(indicators-1)))/indicators) + '%';
    for (var i = 0; i < indicators; i++) {
      var newEl = angular.element('<div class="indicator-bar" data-indicate="'+(i+1)+'"><span>'+i+'</span></div>');
      console.log(width);
      newEl.css({
        'display': 'inline-block',
        'width': width,
        'margin': margin,
        'background-color': 'red',
        'border-radius': '5px'
      });
      myEl.append(newEl);
      console.log(newEl.html());
    }
  }
  var newTimeout = $timeout(drawIndicator, 1);

  var moveIndicator = function(){
    console.log('hi');
    var oldEl = angular.element(document.querySelector('.active-indicator'));
    if (oldEl){
      oldEl.removeClass('active-indicator');
      oldEl.css('background-color', 'red')
    }
    var el = angular.element( document.querySelector('[data-indicate="'+$scope.indicator+'"]') );
    console.log(el);
    el.addClass('active-indicator');
    el.css('background-color', 'black')
  }
  var newerTimeout = $timeout(moveIndicator, 1);
  // drawIndicator();

}]);
