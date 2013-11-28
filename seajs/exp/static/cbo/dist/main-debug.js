define("assets/combo/1.0.0/main-debug", [ "./text1-debug", "jquery-debug", "./test/text2-debug" ], function(require) {
    var text1 = require("./text1-debug");
    var text2 = require("./test/text2-debug");
    new text1("text1 argument");
    new text2("argument text2");
});

define("assets/combo/1.0.0/text1-debug", [ "jquery-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    function Text1(str) {
        $("#J_text2").css("color", "#ff0000").html("text1.js loaded: " + str);
    }
    module.exports = Text1;
});

define("assets/combo/1.0.0/test/text2-debug", [ "jquery-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    function Text2(str) {
        $("#J_text2").html("text2.js loaded: " + str);
    }
    module.exports = Text2;
});
