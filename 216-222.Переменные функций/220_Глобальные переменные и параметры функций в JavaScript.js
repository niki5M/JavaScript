//1
function func(localNum) {
	console.log(localNum); // 1
}
func(1);

//2
function func(localNum) {
	console.log(localNum);
}

let num = 1;
func(num); // 1

//3
function func(localNum) {
	console.log(localNum); // 1
}

let num3 = 1;
func(num3);
num3 = 2;

//4
let num4 = 1;

function func(localNum) {
	console.log(localNum);
}

num4 = 2;
func(num4); // 2

//5
function func(localNum) {
	localNum = 2;
}

let num5 = 1;
func(num5);
console.log(num5); // 1

//6
function func(localNum) {
	num6 = 2;
}

let num6 = 1;
func(num6);
console.log(num6); // 2

//7
function func(localNum) {
	let num7 = 2;
}

let num7 = 1;
func(num7);
console.log(num7); // 1
