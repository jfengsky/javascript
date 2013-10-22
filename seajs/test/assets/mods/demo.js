define(function(require, exports, module) {
  var $ = require('jquery');
  // require('jquery-easing');
  $('#J_button').click(function(){
    $('#demo').animate({
      left: 400
    }, 200, 'swing');
  });
  module.exports = Spinning;
});
