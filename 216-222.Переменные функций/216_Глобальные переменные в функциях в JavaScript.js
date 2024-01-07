//1
let num = 1;
		
function func() {
	console.log(num);
}

func(); // выведет 1

//2
let num2 = 1;
		
function func() {
	console.log(num2);
}

num2 = 2;
func(); // выведет 2

//3
function func() {
	console.log(num3);
}

let num3;

num3 = 1;
func(); // выведет 1

num3 = 2;
func(); // выведет 2
