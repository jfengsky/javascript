angular.module('plunker', ['ui.bootstrap']);
function AccordionDemoCtrl($scope) {
  $scope.groups = [{
    title: 'title1',
    content: 'content1'
  },{
    title: 'title2',
    content: 'content2'
  }]
}