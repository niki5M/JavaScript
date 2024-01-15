let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let date_1 = new Date();

console.log((date_1 - date) / ( 1000 * 60 * 60 ));