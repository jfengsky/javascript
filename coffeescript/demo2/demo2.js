// Generated by CoffeeScript 1.6.3
var f, foo;

foo = function() {
  this.add = function(x, y) {
    return x + y;
  };
};

foo.prototype.add = function(x, y) {
  return x + y + 10;
};

f = new foo;

console.log(f.add(1, 2));
