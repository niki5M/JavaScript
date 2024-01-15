let date_1  = new Date(2000, 8, 1);
let date = new Date(2010, 1, 15);

let diff = date - date_1; // вычитаем два объекта с датами друг от друга

//1
console.log(diff); // вывод миллисекунд

//2
console.log(diff / (1000 * 60 * 60 * 24)); // вывод прошедших дней

//3
console.log(diff / (1000 * 60 * 60 * 24 * 30)); //вывод в месяцах

//4
console.log(diff / (1000 * 60 * 60 * 24 * 30 * 12)); //вывод в годах