//1
let num = 1230;
let str = String(num);
let last = str[str.length - 1];
if (last == 0) {
	console.log('+++'); // сработает это
} else {
	console.log('---');
}
//2
if ((last == 0) || (last == 2) || (last == 4) || (last == 6) || (last == 8) ){
	console.log('четное'); // сработает это
} else {
	console.log('нечетное');
}