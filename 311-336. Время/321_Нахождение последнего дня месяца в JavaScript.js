//1
function func(year, month){ // функция определения последенго дня в месяце 
    let date = new Date(year, month, 0)
    console.log(date.getDate()); // вывод номера последнего дня месяца
}

func(2024, 1); // в параметрах передаётся год и месяц

//2
let date = new Date(2025, 5, 0);
console.log(date.getDate()); // номер последнего дня 5-го месяца 2025-го года