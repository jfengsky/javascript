define(function(require, exports, module) {
  
  var $ = require('jquery');

  function Text1(str){
    $('#J_text2').css('color','#ff0000').html('text1.js loaded: ' + str);
  }

  module.exports = Text1;
});