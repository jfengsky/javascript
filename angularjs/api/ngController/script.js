$(function($){
  $('#J_button').click(function(){
    var htmlDom = '<div ng-controller="thirdController">{{thirdText}}</div>';
    $('body').append(htmlDom);

  });
});
function firstController($scope){
  console.log($scope);
  $scope.txt = "text1";
  $scope.myHTML = 'I am an <code>HTML</code>string with <a href="#">links!</a> and other <em>stuff</em>';

};
function secondController($scope){
  console.log($scope);
  $scope.desc = "text2";
}
function thirdController($scope){
  console.log($scope);
  $scope.thirdText = "thirdText";
  $scope.$apply();
}