//1
let arr = [1, 2, 0, 4, 5];

for (let elem of arr) {
    console.log(elem);
	if (elem == 0) {
		break; 
	}
}

//2
arr = [1, 8, 0, -4, 5];
let sum = 0;

for (let elem of arr) {
	if (elem < 0) {
		break; 
	}
    sum += elem;
}
console.log(sum);

//3
arr = [1, 8, 3, -4, 5];
key = 0;
for (let elem of arr) {
    key++;
	if (elem == 3) {
		break; 
	}
}
console.log(key);

//4
let result = 0;
for (i = 1; i < 100; i++) {
  result = result + i;
  if (result>100) {
    break;
  }
}
console.log(i);