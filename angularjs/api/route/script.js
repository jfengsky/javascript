angular.module('ngViewExample', ['ngRoute']).confit(function($routeProvider, $locationProvider){
  $routeProvider.when('/Book/:bookId', {
    templateUrl: 'book.html',
    controller: BookCntl,
    resolve: {
      delay: function($q, $timeout){
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
})