//1
function isPositive(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}

let mas = [2, 4, 6];

console.log(isPositive(mas));
//2
function isPositive(num) {
	let arr = [];
	for (let i = 0; i < 100; i++) {
		if (num % i == 0) {
			arr += i + ' ';
		}
	}
	return arr;
}

let num = 10;

console.log(isPositive(num));
//3
function isPositive(num3) {
	let arr = [];
	arr = num3.split('');
	return arr;
}

let num3 = 'abcd';

console.log(isPositive(num3));

//4
function isPositive(num4) {
	let arr = [];
	arr = num4.split('');
	return arr.reverse();
}

let num4 = 'abcd';

console.log(isPositive(num4));

//5
function isPositive(num5) {
	let x = num5[0].toUpperCase() + num5.slice(1);
	return x;
}

let num5 = 'abcd';

console.log(isPositive(num5));

//6
function isPositive(num6) {
	let arr = [];
	let x = [];
	arr = num6.split(' ');
	for (let elem of arr) {
		x += elem[0].toUpperCase() + elem.slice(1) + ' ';
	}
	return x;
}

let num6 = 'я учу джава скрипт!';

console.log(isPositive(num6));

//7
function isPositive(num7) {
	let arr = [];
	for (let i = 1; i <= num7; i++) {
		arr += i + ' ';
	}
	return arr;
}

let num7 = 10;

console.log(isPositive(num7));

//8
function isPositive(num8) {
	let arr = num8.split('');
	let sum = 0;
	for (let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}

let num8 = '123';

console.log(isPositive(num8));

//9
function isPositive(num9) {
	if (num9 % 4 == 0) {
		return 'високосный' 
	} else return 'не високосный' 
}

let num9 = 2005;

console.log(isPositive(num9));

//10
function isPositive(num10) {
	let x = Math.round(num10 / 86400);
	return x;
}

let num10 = 1000000;

console.log(isPositive(num10));

//11
function isPositive(num11) {
	let item = num11[Math.floor(Math.random()*num11.length)];
	return item;
}

let num11 = [1, 2, 3, 4, 5];

console.log(isPositive(num11));

//12
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
console.log(isPrime(15)); 