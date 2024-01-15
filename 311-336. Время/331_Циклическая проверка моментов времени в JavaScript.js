let now  = new Date();
let currentYear = now.getFullYear();
let count = 0;

for (let year = 2000; year <= currentYear; year++) {
	let date = new Date(year, 0, 1);
	
	if (date.getDay() == 0 || date.getDay() == 6) {
        count++;
    }
}

console.log('Количество 1 января, выпадающих на выходной: ', count);