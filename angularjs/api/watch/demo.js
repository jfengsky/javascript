function getdata(scope, http, url){
  http({
    method: 'GET',
    url: url
  }).success(function(data, status, headers, config) {
    scope.txt = data.text;
    scope.desc = data.descript;
  });
}

function testControl($scope, $http) {
  console.log(111);
  getdata($scope, $http, './data1.json');
  $scope.doit = function(){
    getdata($scope, $http, './data2.json');
  }
}
