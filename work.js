/*Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.*/

function Calculator() {
	this.read = function() {
		this.a = +prompt('1 = ');
		this.b = +prompt('2 = ');
	};
	this.sum = function() {
		return this.a + this.b;
	};
	this.mul = function() {
		return this.a * this.b;
	};
}

var calculator = new Calculator();

calculator.read();
console.log("Сумма=" + calculator.sum());
console.log("Произведение=" + calculator.mul());

/*Напишите функцию-конструктор Accumulator(startingValue).
Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
Более формально, объект должен:
	Хранить текущее значение в своём свойстве value.
Начальное значение свойства value ставится конструктором равным startingValue.
	Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
	Таким образом, свойство value является текущей суммой всего,
что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.*/

function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		this.value += +prompt('Введите число = ');
	};
}
var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
console.log(accumulator.value); // выведет текущее значение

/*	Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
	Эта задача состоит из двух частей, которые можно решать одна за другой.
	Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2»
с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции),
и возвращает результат. Понимает плюс + и минус -.
	Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции.
Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.*/

function Calculator2() {
	var symbols = {
		"-": function(a, b) {
			return a - b;
		},
		"+": function(a, b) {
			return a + b;
		}
	};
	this.calculate = function(str) {
		var split = str.split(' '),
			a = +split[0],
			symb = split[1],
			b = +split[2];
		if (!methods[symb] || isNaN(a) || isNaN(b)) {//ЕСЛИ нет символа, либо невозможно преваратить в число
			return NaN;
		}
		return symbols[symb](+a, +b);
	}
	this.addMethod = function(name, func) {
		symbols[name] = func;
	};
}
var calc = new Calculator2;
console.log(calc.calculate("3 + 7"));

var powerCalc = new Calculator2;
powerCalc.addMethod("*", function(a, b) {
	return a * b;
});
powerCalc.addMethod("/", function(a, b) {
	return a / b;
});
powerCalc.addMethod("**", function(a, b) {
	return Math.pow(a, b);
});
var result = powerCalc.calculate("2 ** 3");
console.log(result);