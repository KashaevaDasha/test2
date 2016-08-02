/* 1. Реализовать такое поведение, при котором при пробеге одной лошадью определенной дистанции,
увеличивается также свойство общего пробега  для всех лошадей данного класса.
т.е. свой пробег станет допустим 10 км, общий пробег увеличится на 10км
   2. Добавить лошадкам свойство `усталость`.
Когда лошадка пробегает 1км, у нее увеличивается усталость на единицу.
Максимальная усталость - 10 единиц.
Когда лошадь достигает максимальной усталости, она ложится отдыхать 1 секунду,
усталость сбрасывается в ноль.
После отдыха, лошадь добегает оставшиеся километры, с учетом увеличения усталости, т.е. как в предыдущем пункте.
 */
(function() {
  'use strict';

  /*Добавить всем ф-иям в прототип метод обёртку defer(ms),
  который возвращает обертку, откладыввающую вызов ф-ии на ms милдисекунд*/
  Function.prototype.defer = function(ms) {
    var f = this;

    return function() {
      var context = this,
        arg = arguments;

      setTimeout(function() {
        alert('Отдохнула');
        f.apply(context, arg);
      }, ms);
    }
  }

  var current = {
    totalMileage: 0
  }

  Horse.prototype = current;

  function Horse(name) {
    this._name = name;
    this._mileage = 0;
    this._tired = 0;
  }

  Horse.prototype.run = function(metricArea) {
    this.race = metricArea;

    if (this.race < 0) { //так !this.race не работало
      throw new Error('Ой, а лошадь бежит назад');
    } else {
      console.log("Надо бежать ", this.race, "км");
      this._tiredHorse(this.race);
      this._mileage += this.race;
      Horse.prototype.totalMileage += this.race;
    }
  }

  Horse.prototype._tiredHorse = function(currentRace) {
    for (var i = 0; i < currentRace; i++) {
      var Race = currentRace - i - 1;
      console.log('Усталость>   ', ++this._tired, ' Осталось км из всего пути ', (currentRace - i - 1));
      if (this._tired === 10) {
        console.log('Устала очень! Передохнет минутку, потому что пробежала ', (i + 1));
        this._tired = 0;
        //this._tiredHorse.defer(1000)(currentRace - i - 1);
        this._sleep(2000);
        console.log('Отдохнула', this._name);
        return this._tiredHorse.apply(currentRace - i - 1);
      }
    }
  }

  Horse.prototype._sleep = function(ms) {
    ms += new Date().getTime();
    while (new Date() < ms) {}
  }

  var h1 = new Horse('один');
  var h2 = new Horse('два');
  h1.run(3);
  h1.run(10);

  console.log('mil1 = ' + h1._mileage);
  h2.run(17);
  h2.run(5);
  console.log('mil2 = ' + h2._mileage);
  console.log('total = ' + h2.totalMileage);
  console.log('total = ' + h1.totalMileage);
})();
