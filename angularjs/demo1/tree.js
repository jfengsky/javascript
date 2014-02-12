// angular.module('tree', []).controller('treeController', function($scope) {

  

//   var data = {
//     id: 1,
//     name: 'CRM 运营',
//     descendants: [{
//       id: 1,
//       name: "项目一",
//       children: [{
//         id: 1,
//         name: "活动一"
//       }]
//     }, {
//       id: 2,
//       name: "项目二",
//       children: [{
//         id: 4,
//         name: "活动四"
//       }, {
//         id: 5,
//         name: "活动五"
//       }]
//     }, {
//       id: 2,
//       name: "项目二",
//       children: [{
//         id: 4,
//         name: "活动四"
//       }, {
//         id: 5,
//         name: "活动五"
//       }, {
//         id: 6,
//         name: "活动六"
//       }]
//     }]
//   };

//   $scope.tree = data;

//   setTimeout(function(){
//     // 节点2宽度
//     var firstLength = $("#J_tree .sbox_list").length;
//     var firstWidth = (100/firstLength).toFixed(2);
//     $('#J_tree .sbox_list').css('width', firstWidth + '%');
//     $("#J_tree .fbox").next().css('width', firstWidth * (firstLength - 1) + '%');
//     // 节点3宽度
//     $.each($("#J_tree .sbox_list"), function(index, item){
//       var thirdbox = $($('#J_tree .sbox_list')[index]).find('.sbox');
//       var thirdboxLength = thirdbox.length;
//       var thirdWidth = (100/thirdboxLength).toFixed(2);
//       var thirdline = $($('#J_tree .sbox_list')[index]).find('.tranline');
//       thirdline.css('width', thirdWidth * (thirdboxLength - 1) + '%');
//       thirdbox.css('width', thirdWidth + '%');
//     });
//   }, 200);
  
// });
// 


angular.module('tree', []).directive('treeview', function($document){
  return function(scope, elm, attr){
    var data = {
      id: 1,
      name: 'CRM 运营',
      descendants: [{
        id: 1,
        name: "项目一",
        children: [{
          id: 1,
          name: "活动一"
        }]
      }, {
        id: 2,
        name: "项目二",
        children: [{
          id: 4,
          name: "活动四"
        }, {
          id: 5,
          name: "活动五"
        }]
      }, {
        id: 2,
        name: "项目二",
        children: [{
          id: 4,
          name: "活动四"
        }, {
          id: 5,
          name: "活动五"
        }, {
          id: 6,
          name: "活动六"
        }]
      }]
    };

  scope.tree = data;

  // TODO 改成渲染后回调
  setTimeout(function(){
    // 节点2宽度
    var firstLength = $("#J_tree .sbox_list").length,
        firstWidth = (100/firstLength).toFixed(2);
    $('#J_tree .sbox_list').css('width', firstWidth + '%');
    $("#J_tree .fbox").next().css('width', firstWidth * (firstLength - 1) + '%');
    // 节点3宽度
    $.each($("#J_tree .sbox_list"), function(index, item){
      var thirdbox = $($('#J_tree .sbox_list')[index]).find('.sbox'),
          thirdboxLength = thirdbox.length,
          thirdWidth = (100/thirdboxLength).toFixed(2),
          thirdline = $($('#J_tree .sbox_list')[index]).find('.tranline');
      thirdline.css('width', thirdWidth * (thirdboxLength - 1) + '%');
      thirdbox.css('width', thirdWidth + '%');
    });
  }, 100);





  }

});