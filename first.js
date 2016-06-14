document.write("Первое задание:<br>");
var a=10;
var b=20;
document.write(" Начальные значения<br>a= "+a+" b= "+b +"<br>");
var item=prompt('Выберите пункт меню:\n1. с ипользованием третьей переменной;\n2. без использования.');
switch (item){
	case '1':{
		var c=a;
		a=b;
		b=c;
		document.write("<br> a= "+a+" b= "+b);
		break
	}
	case '2':{
		a=a*b;
		b=a/b;
		a=a/b;
		document.write("<br> a= "+a+" b= "+b);
		break
	}
	default:
		document.write("<br>Аяяяй, не надо так")
}


document.write("<br><br>Второе задание:<br>");
var item=prompt('Выберите пункт меню:\n1. Ввод переменных;\n2. Заданные переменные.');
var firstVariable;
var secondVariable;
var thirdVariable;
switch (item){
	case '1':{
		firstVariable=prompt("Первая переменная");
		secondVariable=prompt("Вторая переменная");
		thirdVariable=prompt("Третья переменная");
		break
	}
	case '2':{
		firstVariable=10;
		secondVariable=30;
		thirdVariable=20;
		break
	}
	default:
		document.write("<br>Аяяяй, не надо так")
}
document.write("<br> Первая переменная= "+firstVariable+" Вторая переменная= "+secondVariable+" Третья переменная= "+thirdVariable);
if ((firstVariable>secondVariable)&&(firstVariable>thirdVariable)){
	firstVariable*=1000;
	if (secondVariable>thirdVariable)
		secondVariable*=100;
	else
		thirdVariable*=100;
}
else
	if ((secondVariable>firstVariable)&&(secondVariable>thirdVariable)){
		secondVariable*=1000;
		if (firstVariable>thirdVariable) 
			firstVariable*=100;
		else
			thirdVariable*=100;
	}
else
	if((thirdVariable>firstVariable)&&(thirdVariable>secondVariable)){
		thirdVariable*=1000;
		if (firstVariable>secondVariable) 
			firstVariable*=100;
		else
			secondVariable*=100;
	}
document.write("<br> Первая переменная= "+firstVariable+" Вторая переменная= "+secondVariable+" Третья переменная= "+thirdVariable);
document.write("<br><br>УИИ я молодец:)");