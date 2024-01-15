let now  = new Date();

//1
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

console.log((now - date) / ( 1000 * 60 ));

//2
let date_1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

console.log((date_1 - now) / ( 1000 * 60 ));

//3
let date_2 = new Date(now.getFullYear(), 11, 31)
let diff = date_2.getTime() - now.getTime();

console.log(diff / (1000 * 60 * 60 * 24));

//4
let count = 0;

for (let month = 0; month < 12; month++){
    let date_3 = new Date(now.getFullYear(), month, 13);

    if (date_3.getDay() == 5){
        count++;
    }
}

console.log('В текущем году пятниц 13-е: ' + count);

//5
