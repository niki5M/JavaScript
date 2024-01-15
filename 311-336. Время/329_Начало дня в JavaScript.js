let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
let date_1 = new Date();

console.log((date_1 - date) / ( 1000 * 60 * 60 ));