var personCtrl = function($scope){
  $scope.name = "jfeng";
  $scope.age = 18;
  $scope.$watch('name', function(){
    console.log($scope.name);
  })
  $scope.$watch('age', function(){
    if($scope.age < 18){
      console.error('age error');
    } else {
      console.log($scope.age);
    }
  })
}

var ShowHideCtrl = function($scope){
  $scope.checked = false;
  $scope.eng = 'to show';
};

// ng-repeat
var friendCtrl = function($scope){
  $scope.friends = [ 'a', 'b', 'c', 'd' , 18, true, 0, false];
};



var friendSeach = function($scope){
  $scope.friends = [
    { name: '男丁格爾', age: 18 }, 
    { name: 'jelly', age: 16 }, 
    { name: '梅干桑', age: 30 }, 
    { name: '莫希爾', age: 31 }
  ];
}