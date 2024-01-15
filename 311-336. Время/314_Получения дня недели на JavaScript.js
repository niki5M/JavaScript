let date = new Date();

//1
console.log(date.getDay()); //номер текущего дня недели

//2
if (date.getDate() == 6 || date.getDate() == 6) console.log("Выходной"); else console.log("Рабочий");

//3
console.log("До ближайшего воскресенья: " + (6 - date.getDay()) + " дня");