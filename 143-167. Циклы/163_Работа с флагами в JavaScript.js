//1
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

//2
let k = 5;
flag = true;

for (let i = 2; i <= Math.sqrt(k); i++) {
    if (k % i === 0) { 
        flag = false;
        break;
    }
}
if (flag ) {
    console.log('простое');
} else {
    console.log('составное');
}