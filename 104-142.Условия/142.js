//1
let mes = 10;

if (mes >= 1 && mes <= 2 && mes == 12) {
	console.log('зима');
}
if (mes >= 3 && mes <= 5) {
	console.log('весна');
}
if (mes >= 6 && mes <= 8) {
	console.log('лето');
}
if (mes >= 9 && mes <= 11) {
	console.log('осень');
}
//2
let a = 'abcde';
if (a[0] == 'a') {
	console.log('да');
} else {
    console.log('нет');
}
//3
let b = 12345;
let str = String(b);
if ((str[0] == '1') || (str[0] == '2') || (str[0] == '3')) {
	console.log('да');
} else {
    console.log('нет');
}
//4
let n = '123';
// let n13 = Number(num13);
let sum1 = Number(n[0]) + Number(n[1]) + Number(n[2]);
console.log(sum1);
//5
let num5 = '123033';
// let n13 = Number(num13);
let sum15 = Number(num5[0]) + Number(num5[1]) + Number(num5[2]);
let sum25 = Number(num5[3]) + Number(num5[4]) + Number(num5[5]);
if (sum15 == sum25) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}