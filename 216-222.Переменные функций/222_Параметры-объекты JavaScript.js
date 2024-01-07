//1
function func(obj) {
	obj.a = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj);
console.log(obj); // {a: !, b: 2, c: 3}

//2
function func(arg) {
	arg = '!';
}

let obj2 = {a: 1, b: 2, c: 3};
func(obj2.a);
console.log(obj2); // {a: 1, b: 2, c: 3}

//3
function func(obj3) {
	obj3 = '!';
}

let obj3 = {a: 1, b: 2, c: 3};
func(obj3.a);
console.log(obj3); // {a: 1, b: 2, c: 3}

//4
function func(arr) {
	arr.splice(1, 1); // удаляется элемент с индексом 1 и их количество (1)
}

let arr = [1, 2, 3];
func(arr);
console.log(arr); // [1, 3]

//5
function func(arr5) {
	arr5.slice(1, 1);
}

let arr5 = [1, 2, 3];
func(arr5);
console.log(arr5); // [1, 2, 3]

//6
function func(arr6) {
	let newArr = arr6;
	newArr[0] = '!';
}

let arr6 = [1, 2, 3];
func(arr6);
console.log(arr6); // [!, 2, 3]