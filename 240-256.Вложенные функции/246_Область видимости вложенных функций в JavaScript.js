//1
function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}

test(); //1

//2
function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
}

test(); //ничего

//3
function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}// ничего

//4
function test() {
	let num;
	
	function func() {
		console.log(num);
	}
	
	num = 1
	func();
	
	num = 2
	func();
}

test(); //1 2

