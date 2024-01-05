let num = 3;
let sum;

if ((num >= 0) && (num <= 99)) {
    sum =(num / 10) + num % 10; 
	if (num <= 9) {
		console.log('число однозначно');
	} else {
		console.log('число двузначно');
	}
} 