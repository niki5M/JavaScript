//1
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
	res += elem;
}
console.log(res);

//2
res = 0;
for (let elem of arr) {
    if (elem % 2 == 0){
        res += elem;
    }
}
console.log(res);

//3
res = 0;
for (let elem of arr) {
    res += (elem ** 2);
}
console.log(res);

//4
res = 1;
for (let elem of arr) {
    res *= elem;
}
console.log(res);