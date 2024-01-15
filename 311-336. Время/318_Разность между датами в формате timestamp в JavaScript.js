//1
let date  = new Date(1988, 2, 1);
let date_1 = new Date(2010, 0, 10);

let diff = date_1.getTime() - date.getTime();

console.log(diff / (1000 * 60 * 60 * 24)); //вывод прошедших дней между датами

//2
let birthday  = new Date(2005, 4, 23);
let now = new Date();

let res = now.getTime() - birthday.getTime();

console.log(res / (1000 * 60 * 60 * 24 * 30)); //вывод прошедших месяцев со дня рождения