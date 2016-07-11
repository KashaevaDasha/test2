/*Напишите функцию sum, которая будет работать так:
               sum(1)(2) == 3;*/
function sum_1(variable) {
	var result = variable;
	function current(a) {
		result += a;
		return current;
	}
	current.toString = function() {
		return result;
	};
	return current;
}

/*Мне было весело :D*/
function sum_2(variable) {
	return (function (current) {
		current.toString = function () {
			return variable;
		};
		return current;
	})(function current(a) {
		variable += a;
		return current;
	});
}

console.log(sum_1(12)(3)(1));
console.log(sum_2(12)(2)(4));