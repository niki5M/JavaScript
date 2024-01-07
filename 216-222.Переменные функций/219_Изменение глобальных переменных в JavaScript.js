//1
let num = 1;

function func() {
	num = 2;
}
func();

console.log(num); // 2

//2
let num2 = 1;

function func() {
	num2 = 2;
}

console.log(num2); // 1

//3
let num3 = 1;

function func() {
	let num3 = 2;
}
func();

console.log(num3); //1

//4
let num4 = 1;

function func() {
	let num4 = 2;
}

console.log(num4); // 1
func(); 

//5
let num5 = 1;

function func() {
	num5 = 2;
}

console.log(num5); // 1
func(); 

//6
let num6 = 1;

function func() {
	num6++;
}

func();
func();
func();
console.log(num6); // 4

//7
function func() {
	num7 = 2;
}

let num7 = 1;
console.log(num7); //1
func();

//8
function func() {
	num8 = 2;
}

let num8 = 1;
func();
console.log(num8); // 2