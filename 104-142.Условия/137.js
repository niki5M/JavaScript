let arr = '123';
let x = 0;
let sum = 0;

if (arr.length == 3) {
    for (let i = 0; i < arr.length; i++){
    x = Number(arr[i]);
    sum = sum + x;
    }
	console.log(sum);
}
