function func(num) {
	let i = 0;
  
	while (num >= 10) {
	  num /= 2;
	  i++;
	}
  
	return i;
}

let iter = func(128);
console.log(iter);