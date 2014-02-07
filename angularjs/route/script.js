var app = angular.module('NewsPub', ['ngRoute']);
function routeConfig($routeProvider){
  $routeProvider.
  when('/', {
        controller: 'ListController',
        templateUrl: 'list.html'
    }).
  when('/list', {
    controller: 'ListController',
    templateUrl: 'list.html'
  }).
  when('/add', {
    controller: 'AddController',
    templateUrl: 'add.html'
  })
}
app.config(routeConfig);  
app.controller('ListController',function($scope){
    $scope.newsList = newsList;
});

app.controller('AddController',function($scope,$location){
    $scope.title = '';
    $scope.content = '';
    $scope.add = function(){
        newsList.push({
            id : newsList.length+1,
            title : $scope.title,
            content : $scope.content,
            date : new Date()
        });
        
        $location.path('list');
    }
});