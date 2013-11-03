define(function(require) {
//  var angular = require('angular');
  var myAppModule = angular.module('myApp',[]);
  myAppModule.controller('TextController', function($scope){
    var someText = {};
    someText.message = "start angular";
    $scope.someText = someText;
  })
  angular.bootstrap(document, ['myApp']);

//var myAppModule = angular.module('myApp',[]);
//myAppModule.controller('TextController', function($scope){
//  var someText = {};
//  someText.message = "start angular";
//  $scope.someText = someText;
})

//});
//var myAppModule = angular.module('myApp',[]);
//myAppModule.controller('TextController', function($scope){
//  var someText = {};
//  someText.message = "start angular";
//  $scope.someText = someText;
//})
