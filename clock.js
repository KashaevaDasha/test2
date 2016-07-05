function displayCanvas() {
	var canvasHTML = document.getElementById('myClockCanvas');
	var contextHTML = canvasHTML.getContext('2d');
	contextHTML.strokeRect(0, 0, canvasHTML.width, canvasHTML.height); //рисует прямоугольник
	//Расчет координат центра и радиуса часов
	var radiusClock = canvasHTML.width / 2 - 10;
	var xCenterClock = canvasHTML.width / 2;
	var yCenterClock = canvasHTML.height / 2;
	var radiusNum = radiusClock - 10; //Радиус расположения рисочек
	//Рисуем стрелки
	var lengthSeconds = radiusNum - 20;
	var lengthMinutes = radiusNum - 30;
	var lengthHour = lengthMinutes / 1.5;
	var d = new Date(); //Получаем экземпляр даты
	var t_sec = 6 * d.getSeconds(); //Определяем угол для секунд
	var t_min = 6 * (d.getMinutes() + (1 / 60) * d.getSeconds()); //Определяем угол для минут
	var t_hour = 30 * (d.getHours() + (1 / 60) * d.getMinutes()); //Определяем угол для часов

	clear(canvasHTML, contextHTML); //Очистка экрана.
	drawOutlineOfClock(canvasHTML, contextHTML, radiusClock, xCenterClock, yCenterClock); //Рисуем контур часов
	drawPartitionOfClock(contextHTML, radiusClock, xCenterClock, yCenterClock, radiusNum); //Рисуем рисочки часов
	digitizationOfDialClock(contextHTML, radiusClock, xCenterClock, yCenterClock, radiusNum); //Оцифровка циферблата часов
	drawSecondHandOfClock(contextHTML, xCenterClock, yCenterClock, radiusNum, lengthSeconds, t_sec); //Рисуем секунды
	drawMinuteHandOfClock(contextHTML, xCenterClock, yCenterClock, lengthMinutes, t_min); //Рисуем минуты
	drawHourHandOfClock(contextHTML, xCenterClock, yCenterClock, lengthHour, t_hour); //Рисуем часы
	drawCenterOfClock(contextHTML, xCenterClock, yCenterClock);//Рисуем центр часов
	return;
}

//Очистка экрана.
function clear(canvasHTML,contextHTML) {
	contextHTML.fillStyle = "#ffffff";
	contextHTML.fillRect(0, 0, canvasHTML.width, canvasHTML.height);//рисует закращений прямоугольник
}

//Рисуем контур часов
function drawOutlineOfClock(canvasHTML,contextHTML,radiusClock, xCenterClock, yCenterClock) {
	contextHTML.strokeStyle = "#0000CC";
	contextHTML.lineWidth = 2,7;
	contextHTML.beginPath();//используется, чтобы начать серию действий описывающих отрисовку часов (круга)
	contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);//окружность рисует
	//contextHTML.moveTo(xCenterClock, yCenterClock);
	contextHTML.stroke();//обводить круг линией
	contextHTML.closePath();
}

//Рисуем рисочки часов
function drawPartitionOfClock(contextHTML,radiusClock, xCenterClock, yCenterClock,radiusNum) {

    var radiusPoint;
	for (var tm = 0; tm < 60; tm++) {
		contextHTML.beginPath();
		if (tm % 5 == 0) {
			radiusPoint = 7;
		} else {
			radiusPoint = 4;
		} //для выделения часовых рисочек
		var xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
		var yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
		contextHTML.lineWidth = 3;
		contextHTML.strokeStyle="#0000CC"
		contextHTML.fillStyle="#33FF99";
		contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
		contextHTML.stroke();
		contextHTML.fill();
		contextHTML.closePath();
	}
}

//Оцифровка циферблата часов
function digitizationOfDialClock(contextHTML, radiusClock, xCenterClock, yCenterClock,radiusNum) {
	for (var th = 1; th <= 12; th++) {
		contextHTML.beginPath();
		contextHTML.font = 'bold 32px verdana';
		var xText = xCenterClock + (radiusNum - 30) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
		var yText = yCenterClock - (radiusNum - 30) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
		contextHTML.fillStyle='#99CCFF';
		contextHTML.strokeStyle='#0000CC';
		contextHTML.lineWidth=3;
		if (th <= 9) {
			contextHTML.strokeText(th, xText - 5, yText + 10);
			contextHTML.fillText(th, xText - 5, yText + 10);
		} else {
			contextHTML.strokeText(th, xText - 15, yText + 10);
			contextHTML.fillText(th, xText - 15, yText + 10);
		}
		contextHTML.closePath();
	}
}

//Рисуем секунды
function drawSecondHandOfClock(contextHTML, xCenterClock, yCenterClock, radiusNum, lengthSeconds, t_sec) {
	contextHTML.beginPath();
	contextHTML.strokeStyle = "#33FF99";
	contextHTML.lineWidth = 3;
	contextHTML.moveTo(xCenterClock, yCenterClock);
	contextHTML.lineTo(xCenterClock + lengthSeconds * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)),
		yCenterClock - lengthSeconds * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180)));
	contextHTML.stroke();
	contextHTML.closePath();
}

//Рисуем минуты
function drawMinuteHandOfClock(contextHTML, xCenterClock, yCenterClock, lengthMinutes, t_min) {
	contextHTML.beginPath();
	contextHTML.strokeStyle = "#0000CC";
	contextHTML.lineWidth = 4, 5;
	contextHTML.moveTo(xCenterClock, yCenterClock);
	contextHTML.lineTo(xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)),
		yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180)));
	contextHTML.stroke();
	contextHTML.closePath();
}
//Рисуем часы
function drawHourHandOfClock(contextHTML, xCenterClock, yCenterClock, lengthHour, t_hour) {
	contextHTML.beginPath();
	contextHTML.strokeStyle = "#0000CC";
	contextHTML.lineWidth = 6;
	contextHTML.moveTo(xCenterClock, yCenterClock);
	contextHTML.lineTo(xCenterClock + lengthHour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)),
		yCenterClock - lengthHour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180)));
	contextHTML.stroke();
	contextHTML.closePath();
}

//Рисуем центр часов
function drawCenterOfClock(contextHTML, xCenterClock, yCenterClock) {
	contextHTML.beginPath();
	contextHTML.strokeStyle = "#0000CC";
	contextHTML.fillStyle = "#99CCFF";
	contextHTML.lineWidth = 4;
	contextHTML.arc(xCenterClock, yCenterClock, 7, 0, 2 * Math.PI, true);
	contextHTML.stroke();
	contextHTML.fill();
	contextHTML.closePath();
}

window.onload = function() { //для самостоятельного обyjления страницы
	window.setInterval(
		function() {
			var d = new Date(); //получаем дату
			document.getElementById("clock").innerHTML = d.toLocaleTimeString();
			//получаем id элемента и передаем туда результат метода toLocaleTimeString
			//возвращает время в виде строкового значения
			displayCanvas();
	}, 1000);
}