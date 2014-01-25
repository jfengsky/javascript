angular.module('drag',[]).directive('draggable', function($document){
  var startX = 0,
      startY = 0,
      x = 0,
      y = 0;
  return function(scope, element, attr){
    element.css({
      position: 'relative',
      border: '1px solid #red',
      background: '#f00',
      cursor: 'pointer'
    });
    element.bind('mousedown', function(event){
      startX = event.screenX - x;
      startY = event.screenY - y;
      element.css({
        top: y + 'px',
        left: x + 'px'
      });
    });
    function mousemove(event){
      y = event.screenY - startY;
      x = event.screenX - startX;
      element.css({
        top: y + 'px',
        left: x + 'px'
      });
    }
    function mouseup() {
      $document.unbind('mousemove', mousemove);
      $document.unbind('mouseup', mouseup);
    }
  }
});