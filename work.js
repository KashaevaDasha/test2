/*Используя оператор "?" возвратить true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат*/
function checkAge_1(age) {
	return (age > 18) ?
		true : confirm('Родители разрешили?');
}

/*Используя оператор "||" возвратить true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат*/
function checkAge_2(age) {
	return (age > 18) || confirm('Родители разрешили?');
}
var age = prompt('Ваш возвраст?');
if (checkAge_1(age)) {
	alert('Доступ разрешен');
} else {
	alert('В доступе отказано');
}
if (checkAge_2(age)) {
	alert('Доступ разрешен');
} else {
	alert('В доступе отказано');
}

/*Написать функцию min(a,b), которая возвращает меньшее из чисел a,b.*/
function min(a, b) {
	return (a < b) ? a : b;
}
console.log(min(2, 5) + '== 2');
console.log(min(3, -1) + '== -1');
console.log(min(1, 1) + '== 1');

/*Написать ф-ию pow(x,n),которая возвращает x в степени n.*/
function pow(x, n) {
	var currentVariable = x;
	for (var i = 1; i < n; i++) {
		currentVariable *= x;
	}
	return currentVariable;
}
var x = prompt('Введите число, которое хотите возвести в степень');
var n = prompt('Введите степень в которую хотите возвести число ' + x);
if (n > 1) {
	console.log(pow(x, n));
} else {
	alert('Вы ввели неправильную степень');
}