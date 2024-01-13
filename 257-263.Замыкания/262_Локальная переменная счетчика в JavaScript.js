//1
function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

func()(); //0
func()(); //0
func()(); //0

//2
function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

let test = func;

test()(); //0
test()(); //0
test()(); //0