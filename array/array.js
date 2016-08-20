let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]

//arr1.forEach( (item, index, array)=>{
//    console.log(item);
//    console.log(index);
//    console.log(array)
//})

let filterArray = arr1.filter( item => {
    return  item < 4
})

console.log(filterArray)

let everyArray = arr1.every( item => {
    return item < 5
})
console.log(everyArray)

let someArray = arr1.some( item => {
    return item < 5
})
console.log(someArray)