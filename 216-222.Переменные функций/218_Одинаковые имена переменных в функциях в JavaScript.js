//1
let num = 1;

function func() {
	num = 2;
}
func(); // выведет 2

console.log(num); // выведет 2

//2
let num2 = 1;

function func() {
	let num2 = 2;
}
func(); // выведет 2

console.log(num2); // выведет 1