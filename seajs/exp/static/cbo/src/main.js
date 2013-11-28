define(function(require) {

  var text1 = require('./text1');
  var text2 = require('./test/text2');

  new text1('text1 argument');
  new text2('argument text2');
});