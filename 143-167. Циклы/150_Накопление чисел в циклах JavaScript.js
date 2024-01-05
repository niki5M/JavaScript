let res = 0;

//1
for (let i = 2; i <= 100; i+=2) {
	res = res + i;
}
console.log(res);
//2
for (let i = 1; i <= 99; i+=2) {
	res = res + i;
}
console.log(res);
//3
let res3 = 1;
for (let l = 1; l <= 20; l ++) {
    res3 *= l;
}
console.log(res3);