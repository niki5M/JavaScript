//1
let str = '' ;
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
        str += i
	}
}
console.log(str);

//2
for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
        str += String(i) + String(j) + ' ';
	}
}
console.log(str);