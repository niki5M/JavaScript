//№1
let test = {x: 1, y: 2, z: 3};
console.log( typeof(test));//object, сложный
//№2
let test2 = {x: 1, y: 2, z: 3};
console.log(typeof(test2.x));//number, примитив
//№3
let test3 = [1, 2, 3];
console.log(typeof(test3));//object, сложный
//№4
let test4 = [1, 2, 3];
console.log(typeof(test4[1]));//number, примитив
//№5
let test15 = [1, 2, 3];
let test25 = 1;

console.log(typeof(test15));//object, сложный
//№6
let test16 = [1, 2, 3];
let test26 = 1;

console.log(typeof(test16[test26]));//number, примитив
//№7 string, number, boolean, null, undefined, symbol, bigint