myapp = {};

myapp.Greeter = function() { };

myapp.Greeter.prototype.greet = function(name) {
  return "Hello " + name + "!";
};

function demo(el){
  if(el > 10){
    return "number"
  } else {
    return NaN
  }
}