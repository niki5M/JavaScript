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
for (let subArr of arr) {
	for (let elem of subArr) {
        summ += elem;
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
for (let subArr of arr2) {
	for (let x of subArr) {
        for (let elem of x)
        sum += elem;
	}
}
console.log(sum);