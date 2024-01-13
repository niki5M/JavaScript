//1
function test(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num);
}

test(1); //1

//2
function test(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num + 1);
}

test(1); //2

//3
function test(num) {
	function func(localNum) {
		console.log(num);
	}
	
	func(num + 1);
}

test(1); //1

//4
function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num);
}

test(1); //1

//5
function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(localNum); //не объявлена
}

test(1); //ошибка

//6
function test(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test(1); //2