//1
function func1(num1) {
	return num1;
}
function func2(num2) {
	return num2;
}
let x = 3;
let y = 5;
console.log( func1(x) + func2(y) );
 
//2
function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
}

console.log(sum([1, 2, 3, 4, 5]));

//3
let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	console.log(res);
}

func(arr);

//4
function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );

//5
let sum = sum([1, 2, 3, 4, 5]);
console.log(sum(sum));

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

//6
let res = sum([1, 2, 3, 4, 5]);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}

console.log(res);

//7
function add(num) {
	if (num <= 9) {
		return 0 + num;
	}
}

console.log(add(7));

//8
function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}console.log(sum(arr));

//9
let num = '12345';
let res9 = getDigitsSum(num);

function getDigitsSum(num) {
 let arr = [];
 arr = num.split('');
 let sum = 0;
 
 for (let elem of arr) {
  sum += Number(elem);
 }
 
 return sum;
}

console.log(res9);

//10
function isPrime(num) {
	if (num <= 1) {
	  return false;
	}
	
	for (let i = 2; i < num; i++) {
	  if (num % i === 0) {
		return false;
	  }
	}
	
	return true;
  }
console.log(isPrime(13)); 