//1
function func({color, width, height}) {
	console.log(color);
    console.log(width);
    console.log(height);
}

func( {color: 'red', width: 400, height: 500} );

//2
function func_2({color = 'black', width, height}) {
	console.log(color);
    console.log(width);
    console.log(height);
}

func_2( {color: 'red', width: 400, height: 500} );