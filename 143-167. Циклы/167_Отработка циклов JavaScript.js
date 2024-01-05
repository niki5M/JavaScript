//1
for (let i = 1; i <= 100; i++) {
    console.log(i)
}
//2
for (let i = 100; i >= 1; i--) {
    console.log(i)
}
//3
for (let i = 2; i <= 100; i += 2) {
    console.log(i)
}
//4
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push('x')
}
console.log(arr)
//5
arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);
//6
arr = [1, 5, 8, 14, 52, 48];
for (let elem of arr) {
    if (elem > 0 && elem <= 10) {
        console.log(elem);
    }
}
//7
arr = [1, 5, 8, 14, 52, 48];
for (let elem of arr) {
    if (elem === 5) {
        console.log(elem);
        break;
    }
}
//8
arr = [1, 5, 8, 14, 52, 48];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
console.log(sum);
//9
arr = [1, 5, 8, 14, 52, 48];
sum = 0;
for (let elem of arr) {
    let result = elem ** 2;
    sum += result;
}
console.log(sum);
//10
arr = [1, 5, 8, 14, 52, 48];
let result = 0;
for (let elem of arr) {
    result += elem;
}
console.log(result / arr.length);
//11
arr = [1, 5, 8, 14, 52, 48];
result = 1;
for (i = 0; i <= arr.length - 3; i++) {
    result *= arr[i];
}
console.log(result);
//12
arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);
//13
arr = [1, 3, -5, 7, 8, 14, -15, -17];
result = 0;
for (let elem of arr) {
    if (elem >= 0) {
        result += elem;
    }
}
console.log(result);
//14
arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
    let str = String(elem);
    if (str[0] == 1 || str[0] == 2 || str[0] == 5)
        console.log(str);
}
//15
arr = [10, 20, 30, 50, 235, 3000];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
//16
arr = [1, 2, 2, 9, 4, 5];
for (let i = 0; i < arr.length; i++) {
    let arrEl = arr[i];
    if (arrEl === i) {
        console.log(arr[i]);
    }
}
//17
arr = [5, 1, 35, 56, 3467];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + '<br>');
}
//18
arr = [5, 1, 35, 56, 3467];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + '<p>');
}
//19
arr = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let week = '';
for (let i = 0; i <= arr.length - 3; i++) {
    week += arr[i] + ' ';
}
console.log(week + '<b>' + 'Saturday' + '</b>' + ' ' + '<b>' + 'Sunday' + '</b>');
//20
arr = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
day = arr[6];
week = [];
for (let i = 0; i < arr.length - 1; i++) {
    week += ' ' + arr[i] + ' ';
}
console.log(week + ' ' + '<i>' + day + ' ' + '</i>');
//21
obj = { employee1: 100, employee2: 200, employee3: 300, employee4: 400, employee5: 500, employee6: 600, employee7: 700 };
for (let key in obj) {

    str = obj[key] + obj[key] * 0.1;

    console.log(str);

}
//22
obj = { employee1: 100, employee2: 200, employee3: 300, employee4: 400, employee5: 500, employee6: 600, employee7: 700 };
for (let key in obj) {
    if (obj[key] <= 400) {
        str = obj[key] + obj[key] * 0.1;
        console.log(str);
    }
}
//23
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
obj = {};
for (let i = 0; i <= 4; i++) {
    let key = arr1[i];
    let value = arr2[i];
    obj[key] = value;
}
console.log(obj);
//24
obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
sum = 0;
let sum2 = 0;
for (let key in obj) {
    sum += Number(key);
    sum2 += new Number(obj[key]);
}
console.log(sum / sum2);
//25
obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
arr1 = [];
arr2 = [];
for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);
//26
obj = {1: 125, 2: 225, 3: 128, 4: 356, 5: 145, 6: 281, 7: 452 };
arr = [];
for (let key in obj) {
    let value = String(obj[key]);
    if (value[0] == 1 || value[0] == 2) {
        arr.push(Number(value));
    }
}
console.log(arr);
//27
arr = ['a', 'b', 'c', 'd', 'e'];
arr2 = [1, 2, 3, 4, 5];
obj = {};
for (let i = 0; i <= 4; i++) {
    let key = arr2[i];
    let value = arr[i];
    obj[key] = value;
}
console.log(obj);
//28
arr = ['a', 'b', 'c', 'd', 'e'];
arr2 = [1, 2, 3, 4, 5];
obj = {};
for (let i = 0; i <= 4; i++) {
    let key = arr2[i];
    let value = arr[i];
    obj[key] = value;
}
console.log(obj);