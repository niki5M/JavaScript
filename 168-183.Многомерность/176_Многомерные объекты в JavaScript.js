//1
let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};
let sum = 0;

for (let Key in obj) {
    for (let subKey in obj[Key]) {
        sum += obj[Key][subKey];
    }
}

console.log(sum);

//2
let Object = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
};

console.log(Object[2][2]);
console.log(Object[3][1]);


//3
let obj1 = {
	key1: {
		a: 1, 
		b: 2, 
		c: {
			d: 3,
			e: 4,
		}, 
		f: 5,
	},
	key2: {
		g: 6, 
		h: 7,
	},
}

let summ = obj1.key1.a + obj1.key1.b + obj1.key1.c.d + obj1.key1.c.e + obj1.key1.f + obj1.key2.g + obj1.key2.h;
console.log(summ);