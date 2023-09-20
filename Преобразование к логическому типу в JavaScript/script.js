//№1
let test = Boolean(3);
alert(test);//true
//№2
let test1 = Boolean(0);
alert(test1);//false
//№3
let test2 = Boolean(-1);
alert(test2);//true
//№4
let test3 = Boolean(-0);
alert(test3);//false
//№5
let test4 = Boolean(+0);
alert(test4);//false
//№6
let test5 = Boolean('abc');
alert(test5);//true
//№7
let test6 = Boolean('');
alert(test6);//false
//№8
let test7 = Boolean('0');
alert(test7);//true
//№9
let test8 = Boolean(true);
alert(test8);//true
//№10
let test9 = Boolean(false);
alert(test9);//false
//№11
let test10 = Boolean('true');
alert(test10);//true
//№12
let test11 = Boolean('false');
alert(test11);//true
//№13
let test12 = Boolean(null);
alert(test12);//false
//№14
let test13 = Boolean('null');
alert(test13);//true
//№15
let test14 = Boolean(undefined);
alert(test14);//false
//№16
let test15 = Boolean('undefined');
alert(test15);//true
//№17
let test16 = Boolean(NaN);
alert(test16);//false
//№18
let test17 = Boolean('NaN');
alert(test17);//true
//№19
let test18 = Boolean(3 * 'abc');
alert(test18);//false
//№20
let test19 = Boolean(Infinity);
alert(test19);//true
//№21
let test20 = Boolean(1 / 0);
alert(test20);//true