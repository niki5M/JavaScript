//1
let arr = [
    [
        1, 2, 3
    ], 
    [
        4, 5
    ], 
    [
        6
    ]
];
let summ = 0;
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
            summ += arr[i][j];
	}
}
console.log(summ);
//2
let arr2 = [
    [
        [1, 2], [3, 4]
    ], 
    [
        [5, 6], [7, 8]
    ]
];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
	for (let j = 0; j < arr2[i].length; j++) {
        for (let x = 0; x < arr2[i].length; x++) {
            sum += arr2[i][j][x];
        }
	}
}
console.log(sum);