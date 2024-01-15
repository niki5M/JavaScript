let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

console.log((date - now) / ( 1000 * 60 * 60 ));