//1
function func([name, surname, department, position, salary]) {
	console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
    console.log(salary);
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );

//2
function func_2([name, surname, ...info]) {
	console.log(name);
    console.log(surname);
    console.log(info);
}

func_2( ['John', 'Smit', 'development', 'programmer', 2000] );

//3
function func_3([name, surname, department, position = "джуниор"]) {
	console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
}

func_3( ['John', 'Smit', 'development'] );

//4
function func_4(department, [name, surname], [year, month, day]) {
	console.log(department);
    console.log(name);
    console.log(surname);
    console.log(year);
    console.log(month);
    console.log(day);
}

func_4( 'development', ['John', 'Smit'], [2018, 12, 31] );