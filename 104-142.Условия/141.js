//1
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}
//2
let num12 = '1';
let num22 = '2';
let a = parseInt(num12);
let b = parseInt(num22);
if (a + b === 3) {
	console.log('+++');
} else {
	console.log('---');
}
//3
if ((Number(num12) + Number(num22)) === 3) {
	console.log('+++');
} else {
	console.log('---');
}
//4
let num4 = 123;
let str = String(num4);
if (str[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}
//5
if ((String(num4)[0]) == 1) {
	console.log('+++');
} else {
	console.log('---');
}
//6
if ((String(num4)[0]) == 1) {
	console.log('+++');
} else {
	console.log('---');
}
//7
let first = String(num4);

if (first[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}
//8
let num8 = 12;
let str8 = String(num8);
if (str8.length == 2) {
	console.log('+++');
} else {
	console.log('---');
}
//9
let str9 = String(num8);

if (str9.length == 2) {
	console.log('+++');
} else {
	console.log('---');
}
//10
if ((String(num8).length) == 2) {
	console.log('+++');
} else {
	console.log('---');
}
//11
if ((String(num8).length) == 2) {
	console.log('+++');
} else {
	console.log('---');
}
//12
if ((String(num8).length) == 2) {
	console.log('+++');
} else {
	console.log('---');
}
//13
let num13 = '123033';
// let n13 = Number(num13);
let sum1 = Number(num13[0]) + Number(num13[1]) + Number(num13[2]);
let sum2 = Number(num13[3]) + Number(num13[4]) + Number(num13[5]);
if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}