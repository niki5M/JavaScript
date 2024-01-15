let now  = new Date();

//1
let date = new Date(now.getFullYear() + 1, 11, 31);
console.log(date.getDay());

//2
let date_1 = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(date_1.getDay());

//3
let date_2 = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log(date_2.getDay());