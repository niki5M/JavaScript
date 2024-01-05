let str = 'abcx';

//1
if (str[0] == 'a') {
	console.log('верно');
}
//2
let last = str[str.length - 1];
if (last == 'x') {
	console.log('верно');
}
//3
let x = 'bsa';
if ((x[0] == 'a')||(x[0] == 'b')) {
	console.log('верно');
}