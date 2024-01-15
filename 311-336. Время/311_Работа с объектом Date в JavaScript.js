let date = new Date();

//1
console.log(date.getDay());
//2
console.log(date.getMonth()); //выведет 0, потому что в JS месяца начинаются с 0
console.log(date.getMonth() + 1); // для привычного отобраения месяцв нужно прибавить еденицу
//3
console.log(date.getFullYear());