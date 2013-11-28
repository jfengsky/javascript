function Controller($scope){
  $scope.counter = 0;
  $scope.change = function(){
    $scope.counter++;
  }
}