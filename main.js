var ajax = new XMLHttpRequest();
console.log(ajax.readyState);

ajax.open('GET', './_public/dummy.json', true);
console.log(ajax.readyState);

ajax.send();
console.log(ajax.readyState);

ajax.onreadystatechange = function() {
	if (ajax.readyState === 4) {
		console.log(ajax.responseText);
		try {
			var data = JSON.parse(ajax.responseText);
			renderData(data);
		} catch (err) {
			console.error(err);
		}
	}
};

function renderData(data) {
	data.forEach(function(_data) {
		var list = document.createElement('ul');
		list.innerHTML = _data.name;
		var li = list.appendChild(document.createElement('li'));
		var li1 = list.appendChild(document.createElement('li'));
		li.innerHTML = _data.model;
		li1.innerHTML = _data.price;
		document.body.appendChild(list);
	});
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*var script = document.createElement('script');
var link = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=';
//var deb='London&callback=mySuperFunction';
var cur = document.querySelector('input[type=text]');

if (cur.value) {
	link = link + cur.value;
}

script.src = link + '&callback=mySuperFunction';
//script.src = link+deb;
var head = document.querySelector('head');
head.appendChild(script);

function mySuperFunction(data) {
	console.log(data);
	for (var i = 0; i < data.response.listings.length; i++) {
		var ul = document.createElement('ul');
		ul.innerHTML = i + 1;

		var li1 = document.createElement('li'); //знаю, что хрень, но не пойму как иначе можно, чтобы создавался так сказать массив из li
		var li2 = document.createElement('li');
		var li3 = document.createElement('li');
		var img = document.createElement('img');

		li1.innerHTML = data.response.listings[i].summary;
		img.src = data.response.listings[i].img_url;
		li2.appendChild(img);
		li3.innerHTML = data.response.listings[i].price_formatted;

		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);

		document.body.appendChild(ul);
	}
}*/