//1
let result = function() {
	return '!';
}();
		
console.log(result); // !

//2
let result2 = function() {
	return '!';
};
		
console.log(result2) 
// ƒ () {
// 	return '!';
// }

//3
let result3 = function() {
	return '!';
};
		
console.log(result3()); // !