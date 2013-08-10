// function Cat(name, color){
//   this.name = name;
//   this.color = color;
//   this.specil = "猫科";
// }

// var catA = new Cat('大毛', '黄色');
// var catB = new Cat('二毛', '黑色');

// console.log(catA.specil);
// console.log(catB.specil);
// catA.specil = "犬科";
// console.log(catA.specil);
// console.log(catB.specil);
// var cat1 = new Cat('大毛', '黄色');

// // console.log(cat1.type);

// Cat.prototype.type = "猫科动物";
// Cat.prototype.eat = function(){
//   console.log("老鼠");
// };

// var cat2 = new Cat('二毛', '黑色');
// var cat3 = new Cat('二毛', '黑色');
// // console.log(cat2.type);

// // console.log(cat2.eat == cat3.eat);

// // console.log( Cat.prototype.isPrototypeOf(cat1));

// console.log(cat2.hasOwnProperty('name'));
// console.log(cat2.hasOwnProperty('type'));





// function Dog(name){
//   this.name = name;
// }
// Dog.prototype = {
//   special: "犬科"
// };
// var dogA = new Dog('大毛');
// var dogB = new Dog('二毛');

// console.log(dogA.special);
// console.log(dogB.special);

// Dog.prototype.special = "猫科";

// console.log(dogA.special);
// console.log(dogB.special);