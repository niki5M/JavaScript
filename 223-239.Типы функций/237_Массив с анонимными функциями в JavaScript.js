//1
let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];
//2
for (let func of arr) {
	if (func() == '3') {
		console.log(func());
	} 
}

//3
let result = arr[0]() + arr[1]() + arr[2]();
console.log(result);

//4
for (let func of arr) {
	console.log(func());
}