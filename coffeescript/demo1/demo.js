// Generated by CoffeeScript 1.6.3
(function() {
  var a, exports, firstTwo, func, fund, i, insertText, mystring, name, numbers, rang, times, txt, words, _i, _j, _len, _len1, _ref, _ref1, _ref2,
    _this = this,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  exports = this;

  func = function() {
    return 'bar';
  };

  fund = function() {
    'bar';
  };

  times = function(a, b) {
    return a * b;
  };

  times = function(a, b) {
    if (a == null) {
      a = 1;
    }
    if (b == null) {
      b = 2;
    }
    return a * b;
  };

  a = "hello";

  alert(a);

  alert(a);

  alert(inspect(a));

  alert(inspect(a));

  alert(inspect(a));

  this.clickHandler = function() {
    return alert("clicked");
  };

  dlement.addEventListener('click', function(e) {
    return _this.clickHandler(e);
  });

  if (true) {
    return true;
  }

  if (true === true) {
    "ok";
  }

  if (true) {
    "ok";
  } else {
    "back";
  }

  if (true !== true) {
    a = 3;
  } else {
    a = 54;
  }

  if (true !== true) {
    a = 3;
  } else {
    a = 4;
  }

  if (abc === true) {
    alert("it's good");
  }

  if (!abc) {
    "abc";
  }

  if (abc !== true) {
    "bcd";
  }

  txt = "text demo";

  insertText = "insert " + txt;

  _ref = ["abc", "def", 'bhi'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    alert("name is: " + name);
  }

  _ref1 = ["abc", "def"];
  for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
    name = _ref1[i];
    alert("" + i + " - " + name);
  }

  rang = [1, 2, 3, 4, 5];

  firstTwo = ['one', 'tow', 'three'].slice(0, 2);

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  [].splice.apply(numbers, [3, 3].concat(_ref2 = [-3, -4, -5])), _ref2;

  mystring = "myString".slice(0, 3);

  words = ['rattled', 'roude', 'rebbles', 'ranks'];

  if (__indexOf.call(words, 'roude') >= 0) {
    alert("stop is ");
  }

}).call(this);
