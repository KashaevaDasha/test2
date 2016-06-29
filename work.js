function randomInteger(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}

/*Создание двумерного массива*/
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

/*Первый способ (возвращая строку): Обход по периметру двумерного массива по часовой стрелке*/
function displayPerimetrInOrder_1(length, arrMain) {
	var line = ' ';
	/*top*/
	for (var j = 0; j < length; j++) {
		line += arrMain[0][j] + ' ';
	}
	/*right*/
	for (var i = 1; i < length; i++) {
		line += arrMain[i][length - 1] + ' ';
	}
	/*bottom*/
	for (var j = length - 1; j >= 0; j--) {
		if (j < length - 1) line += arrMain[length - 1][j] + ' ';
	}
	/*left*/
	for (var i = length - 1; i >= 0; i--) {
		if ((i < length - 1) && (i > 0)) line += arrMain[i][0] + ' ';
	}
	/*perimetr*/
	return line;
}

/*Второй способ (возвращая массив): Обход по периметру двумерного массива по часовой стрелке*/
function displayPerimetrInOrder_2(length, arrMain) {
	var top = [],
		bottom = [],
		left = [],
		right = [];
	for (var j = 0; j < length; j++) {
		top.push(arrMain[0][j]);
		bottom.push(arrMain[length - 1][j]);
	}
	bottom.reverse();
	for (var i = 0; i < length; i++) {
		if (i > 0 && i < length - 1) {
			right.push(arrMain[i][length - 1]);
			left.push(arrMain[i][0]);
		}
	}
	left.reverse();
	return top.concat(right, bottom, left);
}

/* Обход по периметру двумерного массива против часовой стрелки*/
function displayPerimetrOutOfOrder(length, arrMain) {
	var top = [],
		bottom = [],
		left = [],
		right = [];
	for (var i = 0; i < length; i++) {
		left.push(arrMain[i][0]);
		right.push(arrMain[i][length - 1]);
	}
	right.reverse();
	for (var j = 0; j < length; j++) {
		if (j > 0 && j < length - 1) {
			bottom.push(arrMain[length - 1][j]);
			top.push(arrMain[0][j]);
		}
	}
	top.reverse();
	return left.concat(bottom, right, top);
}

/*Обойти массив по верхней грани, правой грани и главной диагонали (по часовой стрелке)*/
function displayUpperTriangleOfMainDiadonal(length, arrMain) {
	var top = [],
		right = [],
		mainDiagonal = [];
	for (var j = 0; j < length; j++) {
		top.push(arrMain[0][j]);
	}
	for (var i = 0; i < length; i++) {
		if (i > 0 && i < length - 1) {
			right.push(arrMain[i][length - 1]);
		}
	}
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length; j++) {
			if (i == j && i > 0) mainDiagonal.push(arrMain[i][j]);
		}
	}
	mainDiagonal.reverse();
	return top.concat(right, mainDiagonal)
}

/*Обойти массив по верхней грани, побочной диагонали и левой грани (по часовой стрелке)*/
function displayUpperTriangleOfSideDiadonal(length, arrMain) {
	var top = [],
		left = [],
		sideDiagonal = [];
	for (var j = 0; j < length; j++) {
		top.push(arrMain[0][j]);
	}
	for (var i = 0; i < length; i++) {
		if (i > 0 && i < length - 1) {
			left.push(arrMain[i][0]);
		}
	}
	left.reverse();
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length; j++) {
			if (i == length - j - 1 && i > 0) sideDiagonal.push(arrMain[i][j]);
		}
	}
	return top.concat(sideDiagonal, left);
}

function createSnake(length) {
	var arrMain = new Array(length),
		Spiral = length / 2,
		j = 0;
	/*Создание и обнуление матрицы*/
	for (var i = 0; i < length; i++) {
		var arr = new Array(length);
		for (var k = 0; k < length; k++) {
			arr[k] = 0;
		}
		arrMain[i] = arr;
	}
	/*Цыкл по числу спиралей*/
	for (var countSpiral = 1; countSpiral <= Spiral; countSpiral++) {
		/*top*/
		for (var i = (countSpiral - 1); i < (length - countSpiral + 1); i++) {
			arrMain[countSpiral - 1][i] = ++j;
		}
		/*right*/
		for (var i = countSpiral; i < (length - countSpiral + 1); i++) {
			arrMain[i][length - countSpiral] = ++j;
		}
		/*bottom*/
		for (var i = (length - countSpiral - 1); i >= (countSpiral - 1); --i) {
			arrMain[length - countSpiral][i] = ++j;
		}
		/*left*/
		for (var i = (length - countSpiral - 1); i >= countSpiral; i--) {
			arrMain[i][countSpiral - 1] = ++j;
		}
	}
	/*Центр спирали (последний элемент)*/
	if (length % 2) arrMain[countSpiral - 1][countSpiral - 1] = length * length;
	return arrMain;
}

var size = prompt('Input size of two-dimentional array');
var sizeOfSnake = prompt('Input size of matrix');
var matrix = createMatrix(size);
console.table(matrix);
console.log(displayPerimetrInOrder_1(size, matrix));
console.log(displayPerimetrInOrder_2(size, matrix));
console.log(displayPerimetrOutOfOrder(size, matrix));
console.log(displayUpperTriangleOfMainDiadonal(size, matrix));
console.log(displayUpperTriangleOfSideDiadonal(size, matrix))
console.table(createSnake(sizeOfSnake));