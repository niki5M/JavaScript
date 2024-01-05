//1
let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};

let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11

console.log(months[lang][month]);
//2
let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}

let year = '2018';
month = 11;
let day = 30;

console.log(affairs[year][month][day]);
//3
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

console.log(obj[key1][key2]);

console.log(obj[key1][key2]);
//4
let obj1 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

key1 = 'key2';
console.log(obj[key1]['key4']);
//5
let obj5 = {
	key15: {
		key25: '12',
		key35: '13',
	},
	key25: {
		key45: '24',
		key55: '25',
	},
}

let key15 = 'key25';
let key25 = 'key45';
console.log(obj5[key15][key25]);