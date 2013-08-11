// function Animal(){
//   this.species = '动物';
// }

// function Cat(name, color){
//   this.name = name;
//   this.color = color;
// }


// 1
// function Cat(name, color){
//   Animal.apply(this, argument);
//   this.name = name;
//   this.color = color;
// }


// 2

// Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat;
// 
// 
// 3

// function Animal(){};
// Animal.prototype.species = "动物";

// // Cat.prototype = Animal.prototype;
// // Cat.prototype.constructor = Cat;

// var F = function(){};
// F.prototype = Animal.prototype;

// Cat.prototype = new F();


function extend(Child, Parent){
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}