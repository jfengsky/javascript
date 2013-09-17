var man = {
  hands: 2,
  legs: 2,
  heads: 3
};
if (typeof Object.prototype.clone === "undefined") {
   Object.prototype.clone = function () {};
}
for (var i in man){
  console.log(i + ': ' + man[i]);
}

for (var j in man){
  if(man.hasOwnProperty(j)) {
    console.log(j + ': ' + man[j]);
  }
}