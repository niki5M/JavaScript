//1
let counter = 0;
		
function test() {
	return function() {
		console.log(counter);
		counter++;
	};
}

let func = test;

let func1 = func();
let func2 = func();
func1(); //0
func2(); //1
func1(); //2
func2(); //3

//2
function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func20 = test()();

let func21 = func;
let func22 = func;
func21(); //0
func22(); //1
func21(); //2
func22(); //3

//3
function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func30 = test();

let func31 = func();
let func32 = func();
func31();
func32();
func31();
func32();