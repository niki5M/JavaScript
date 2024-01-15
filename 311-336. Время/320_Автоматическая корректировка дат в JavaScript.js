//1
let date = new Date(2018, 1, 35);
console.log(date); // 2018-03-06T21:00:00.000Z

//2
let date2 = new Date(2018, 15, 1);
console.log(date2 ); // 2019-03-31T21:00:00.000Z

//3
let date3 = new Date(2018, 3, 31);
console.log(date3); // 2018-04-30T21:00:00.000Z

//4
let date4 = new Date(2018, 1, 31);
console.log(date4); // 2018-03-02T21:00:00.000Z

//5
let date5 = new Date(2018, 12, 33);
console.log(date); // 2018-03-06T21:00:00.000Z

//6
let date6 = new Date(2018, 33, 33);
console.log(date6); // 2020-11-01T21:00:00.000Z

//7
let date7 = new Date(2018, 5, 0);
console.log(date7); // 2018-05-30T21:00:00.000Z

//8
let date8 = new Date(2018, 0, 0);
console.log(date8) // 2017-12-30T21:00:00.000Z

//9
let date9 = new Date(2018, -12, -33);
console.log(date9); // 2016-11-27T21:00:00.000Z

//10
let date10 = new Date(2018, 0, 1, 23, 0, 60);
console.log(date10); // 2018-01-01T20:01:00.000Z

//11
let date11 = new Date(2018, 0, 1, 23, 60, 0);
console.log(date11); // 2018-01-01T21:00:00.000Z

//12
let date12 = new Date(2018, 0, 1, 100, 100, 100);
console.log(date12); // 2018-01-05T02:41:40.000Z