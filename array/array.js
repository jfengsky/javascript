var arr1 = ['c', 'a', 'b', 'd'];
var arr2 = [['a', 'b'], ['c', 'd', 'e'], ['f', 'g']];
var arr3 = [1, 2, 3];

console.log(arr1);
console.log(arr2);

// delete(arr1[1]);
// console.log(arr1);

// arr1.push('xx');
// arr1.unshift('yy');
// var arr4 = arr1.concat(arr2);
// var arr4 = arr1.pop();
// var arr4 = arr1.shift();
// console.log(arr1);
// arr1.splice(1,0,'xyz');
// var arr4 = arr1.slice(0,2);
// arr1.sort();
// arr1.reverse();
// console.log(arr1.toLocaleString());

// console.log(arr1.indexOf('d'));
// console.log(arr1.lastIndexOf('c'));

// var arr4 = arr2.every(function(element, index, array){
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });
// console.log(arr4);

// arr1.forEach(function(value, index, array){
//   console.log(value);
//   console.log(index);
//   console.log(array);
// });

arr1.map(function(value, index, array){
  console.log(value);
  console.log(index);
  console.log(array);
});