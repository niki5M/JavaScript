//1
function func() {
	console.log('!');
}
+1; //Function Declaration

//2
function func() {
	console.log('!');
} + 1; //Function Declaration

//3
+function func() {
	console.log('!');
} + 1; //Function Expression

//4
+
function func() {
	console.log('!');
} + 1; //Function Expression

//5
+ 1
function func() {
	console.log('!');
} + 1; //Function Declaration

//6
function func() {
	console.log('!');
} + console.log('!'); //Function Declaration