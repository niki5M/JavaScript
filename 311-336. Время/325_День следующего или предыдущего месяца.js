let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
console.log(date.getDay());

//1 Если текущий месяц январь то при -1, мы перейдем в декабрь предыдущего года

//2
let date_1 = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
console.log(date_1.getDay());