//1
let num = 12345;
let arr = num.toString().split('');

let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum); // Выводит 15
//2
sum = 0;
for (let digit of arr) {
  sum += Number(digit); // Исправлено: преобразование строки в число
}

console.log(sum); 
//3
sum = 0;
for (let digit of arr) {
  sum += Number(digit); // Исправлено: использование операции сложения +=
}

console.log(sum); // Выводит 15
//4
sum = 0; // Исправлено: инициализация с 0, а не пустой строки
for (let digit of arr) {
  sum += Number(digit); // Преобразуем digit в число перед сложением
}

console.log(sum); 
//5
let prod = 1; // Исправлено: инициализация с 1, а не 0
for (let digit of arr) {
  prod *= Number(digit); // Преобразуем digit в число перед умножением
}

console.log(prod); 