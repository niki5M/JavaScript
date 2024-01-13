//1
function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	func();
}

test(1, 2); //3

//2
function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	num1 = 2;
	func();
}

test(1, 2); //4