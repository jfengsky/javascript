angular.module('bootstrapDemoApp', ['ui.bootstrap']);
var ModalDemoCtrl = function ($scope, $modal, $log) {

//  $scope.overlay = ['item111', 'item2222', 'item333'];
  $scope.overlay = {
    type: 'warn',
    title: '标题'
  };
  $scope.overlaytitles = '111';
  // 浮层type: alert , confirm
//  $scope.type = 'warn'; //

  // 浮层title标题，有或者为空则显示标题栏，无则不显示
//  $scope.overlayTitles = '111';

  // 消息提示
//  $scope.message = '';

  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        items: function () {
          return {
            overlay: $scope.overlay
          }
//          return $scope.overlay
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
    console.log($scope);
  };
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};