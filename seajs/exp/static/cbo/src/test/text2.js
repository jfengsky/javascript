define(function(require, exports, module) {

  var $ = require('jquery');

  function Text2(str){
    $('#J_text2').html('text2.js loaded: ' + str);
  }


  module.exports = Text2;
});