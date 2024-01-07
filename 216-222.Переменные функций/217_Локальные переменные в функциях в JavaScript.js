//1
function func() {
	let num = 5;
	return num;
}

console.log(num); // ничего не выведет, а выдаст ошибку

//2 
function func() {
	let num = 5;
	return num;
}

console.log(func()) // выведет 5