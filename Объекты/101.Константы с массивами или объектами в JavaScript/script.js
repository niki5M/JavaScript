//№1
const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); // ['a', '!', 'c']

//№2
const arr2 = ['a', 'b', 'c'];
arr2 = [1, 2, 3];
console.log(arr2); // error

//№3
const arr3 = ['a', 'b', 'c'];
arr3 = ['a', 'b', 'c'];
console.log(arr3); //error
