//1
function test() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	};
}

let func1 = test(); // первый счетчик
func1();  //выведет 1
func1();  //выведет 2

let func2 = test(); // второй счетчик
func2();  //выведет 1
func2();  //выведет 2

//2
function test() {
	let num = 10;
	
	return function() {
		console.log(num);
		num--;
	};
}

let func21 = test(); // первый счетчик
func21();  //выведет 1
func21();  //выведет 2

//3
function test() {
	let num = 10;
	
	return function() {
		if (num > 0 ) {
			console.log(num);
			num--;
		}
		if (num <= 0) {
			console.log('Отсчет окончен');
		}
	};
}

let func31 = test(); // первый счетчик
func31();  //выведет 1
func31();  //выведет 2
func31();  //выведет 1
func31();  //выведет 2
func31();  //выведет 1
func31();  //выведет 2
func31();  //выведет 1
func31();  //выведет 2
func31();  //выведет 1
func31();  //выведет 2
func31();  //выведет 1
func31();  //выведет 2