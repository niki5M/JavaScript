let options = {
	width:  400,
	height: 500,
};

let {color: c = "black", width, height} = options;

console.log(c); // выведет black
console.log(width); // выведет 400
console.log(height); // выведет 500