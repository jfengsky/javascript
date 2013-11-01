define(function(require, exports, module) {
  var angular = require('angularjs');
  var myAppModule = angular.module('TodoApp', []);

  myAppModule.server('myAppModule', myAppModule);
});




 
// configure the module.
// in this example we will create a greeting filter

// myAppModule.filter('greet', function() {
//  return function(name) {
//     return 'Hello, ' + name + '!';
//   };
// });