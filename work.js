window.onload = function() {

	var pitch = document.getElementById('football-pitch');
	var ball = document.getElementById('ball');

	pitch.addEventListener('click', function() {
		event = event || window.event;
		eventTarger = event.targer || event.srcElement;
		eventCurrentTarget = event.currentTarget || this;

		var pitchRect = pitch.getBoundingClientRect();
		var ballRect = ball.getBoundingClientRect();

		var HALF_WIDTH_BALL = ballRect.width / 2;
		var HALF_HEIGHT_BALL = ballRect.height / 2;
		var MOVE_TO_X = event.offsetX - HALF_WIDTH_BALL; //позиция по Х: перемещение right, left
		var MOVE_TO_Y = event.offsetY - HALF_HEIGHT_BALL; //позиция по Y: перемещение top, bottom
		var SIZE_OF_BORDER = (pitchRect.width - pitch.clientWidth) / 2;

		ball.style.left = event.offsetX - HALF_WIDTH_BALL + 'px';
		ball.style.top = event.offsetY - HALF_HEIGHT_BALL + 'px';

		//right
		if (MOVE_TO_X >= (pitch.clientWidth - ballRect.width)) {
			ball.style.left = pitch.clientWidth - ballRect.width + 'px';
		}
		//bottom
		if (MOVE_TO_Y >= (pitch.clientHeight - ballRect.height)) {
			ball.style.top = pitch.clientHeight - ballRect.height + 'px';
		}
		//left
		if (MOVE_TO_X <= (pitch.clientLeft - SIZE_OF_BORDER)) {
			ball.style.left = pitch.clientLeft - SIZE_OF_BORDER + 'px';
		}
		//top
		if (MOVE_TO_Y <= (pitch.clientTop - SIZE_OF_BORDER)) {
			ball.style.top = pitch.clientTop - SIZE_OF_BORDER + 'px';
		}
	})
}