//1
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//2
for (let i = 10; i > 0; i--) {
    console.log(i);
}
//3
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
//3
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
//4
let res = 0;
for (let i = 1; i <= 10; i++) {
    res += i;
}
console.log(res);
//5
res = 1;
for (let i = 1; i <= 10; i++) {
    res *= i;
}
console.log(res);
//6
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}
console.log(sum);
//7
arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let elem of arr) {
    sum += +elem;
}
console.log(sum);
//8
arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let elem of arr) {
    sum += +elem;
}
console.log(sum);
//9
arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}
console.log(sum);
//10
arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    sum += +arr[i];
}
console.log(sum);
//11
arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}
console.log(sum)
//12
arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    elem = elem ** 2;
    console.log(elem);
}
//13
arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(i);
}
console.log(arr);
//14
let obj = { a: 1, b: 2, c: 3 };
sum = 0;

for (let elem in obj) {
    sum += obj[elem];
}

console.log(sum);
//15
obj = { a: 1, b: 2, c: 3 };
sum = 0;

for (let key in obj) {
    sum += obj[key];
}
console.log(sum);
//15
arr = [1, 2, 3, 4, 5];
let flag = false;
for (let elem of arr) {
    if (elem === 3) {
        flag = true;
        break;
    }
}
if (flag === true) {
    console.log('+++');
} else {
    console.log('---');
}
//16
arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);
//17
arr = [1, 2, 3, 4, 5];
res = false;

for (let elem of arr) {
	if (elem === 3) {
		res = true;
		break;
	}
}
console.log(res);
//18
arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}
//19
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
res = []

for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}
console.log(res);