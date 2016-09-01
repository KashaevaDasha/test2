window.onload = function() {
// это табличка)) анимация
	var table = drawTable();
	var config = processTable(table);
	var timer;
	var count=0;

	function rand(min, max) {
		min = min || 0;
		max = max || 1;
		return Math.floor((Math.random() * (max - min) + 0.5) + min);
	}

	function getColor() {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb.push(rand(0, 255));
		}
		return rgb;
	}

	function getInvertColor(rgb) {
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - rgb[i];
		}
		return 'rgb(' + rgb + ')';
	}

	function drawTable() {

		var button = document.createElement('button');

		var color = getColor();
		button.textContent = 'Большая синяя кнопка!';
		button.style.backgroundColor = 'rgb(' + color + ')';
		document.body.appendChild(button);

		var span = document.createElement('span');

		span.textContent = 'Инвертируемый цвет кнопки!'
		span.style.backgroundColor = getInvertColor(color);
		document.body.appendChild(span);

		button.addEventListener('click', function() {
			if (!timer) {
				animate(config, 50);
			} else {
				clearInterval(timer);
				timer = false;
			}
		});

		var table = document.createElement('table');

		for (var i = 0; i < 10; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < 10; j++) {
				var td = document.createElement('td');
				td.textContent = rand(0, 100);
				td.style.backgroundColor = 'rgb(' + getColor() + ')';
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}
		document.body.appendChild(table);

		var rect = table.getBoundingClientRect();
		table.style.position = 'absolute';
		table.style.top = window.innerHeight / 2 - rect.height / 2 + 'px';
		table.style.left = window.innerWidth / 2 - rect.width / 2 + 'px';
		return table;
	}

	function processTable(t) {
		var config = [];
		var tds = t.getElementsByTagName('td');
		for (var i = 0; i < tds.length; i++) {
			config.push({
				top: tds[i].offsetTop,
				left: tds[i].offsetLeft,
				width: tds[i].offsetWidth,
				height: tds[i].offsetHeight,
				td: tds[i]
			});
			do {
				config[i].dirLeft = rand(-1, 1);
				config[i].dirTop = rand(-1, 1);
			} while (!config[i].dirLeft && !config[i].dirTop)
		}
		for (i = 0; i < config.length; i++) {
			config[i].td.style.position = 'absolute';
			config[i].td.style.top = config[i].top + 'px';
			config[i].td.style.left = config[i].left + 'px';
		}
		return config;
	}


	function animate(config, delay) {
		var rect = table.getBoundingClientRect();
		var widthDoc = document.documentElement.clientWidth;
		var heightDoc = document.documentElement.clientHeight;
		//count++;
	console.log(window.screen.width, widthDoc);

		timer = setInterval(function() {
			for (var i = 0; i < config.length; i++) {
				var top = parseFloat(config[i].td.style.top) + (config[i].dirTop * rand(1, 7));
				var left = parseFloat(config[i].td.style.left) + (config[i].dirLeft * rand(1, 7));
				if (left + config[i].width <= window.pageXOffset - rect.left || left >= widthDoc || top + config[i].height <= window.pageYOffset - rect.top || top >= heightDoc) {
					config[i].td.addEventListener('transitionend', animate);
						//console.log(count++);
						//stop(count);
					//config[i].td.style.display = 'none';
				} else {
					config[i].td.style.top = top + 'px';
					config[i].td.style.left = left + 'px';
				}
			}

		}, delay);
	}

	function stop(count) {
		if (count >= 100) {
			clearInterval(timer);
			//table.style.display='none';
		}
	}

};
