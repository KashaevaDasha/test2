function randomInteger(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}

function createArray() {
	var arr = new Array();
	for (var i = 0; i < 10; i++) {
		arr.push(randomInteger(10, 200));
	}
	return arr;
}

function createMatrix(length) {
	var arrMain = new Array(length);
	for (var i = 0; i < length; i++) {
		var arr = new Array(length);
		for (var j = 0; j < length; j++) {
			arr[j] = randomInteger(10, 200);
		}
		arrMain[i] = arr;
	}
	return arrMain;
}

console.log(createArray());
var l = prompt('Please, input length');
console.log(createMatrix(l));