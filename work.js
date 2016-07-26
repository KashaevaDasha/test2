/*Когда кофеварку выключают – текущая варка кофе должна останавливаться.

Например, следующий код кофе не сварит:
var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет*/

(function() {

  'use strict';

  function Machine() { //родитель
    this._enabled = false;
    this.enable = function() {
      this._enabled = true;
    };
    this.disable = function() {
      this._enabled = false;
    };
  }

  function CoffeeMachine(power, waterCapacity) { //наследник
    Machine.apply(this);
    var id, waterAmount = 0;

    var oldEnable = this.enable.bind(this);
    //переопределение методов
    this.enable = function() {
      console.log('Включилась зеленая лампочка!');
      oldEnable();
    };

    var oldDisable = this.disable.bind(this);
    //переопределение методов
    this.disable = function() {
      oldDisable();
      //просто остановив
      //clearTimeout(id);
      //или
      this.stop();
    };

    this.water = function(value) {
      if (typeof value !== 'undefined') {
        if (waterAmount + value <= waterCapacity) {
          waterAmount += value;
        } else {
          waterAmount = waterCapacity;
          console.log('Вылилось: ' + (value - waterCapacity));
        }
      } else {
        return waterAmount;
      }
    };

    var WATER_HEAT_CAPACITY = 4200;

    var getBoilTime = function() {
      var res = waterAmount * WATER_HEAT_CAPACITY * 80 / power;
      console.log(res);
      return res;
    };

    var onReady = function() {
     console.log('Кофе готов!');
    };

    this.setReady = function(myFunc) {
      if (typeof myFunc == 'function') {
        onReady = myFunc;
      }
    };

    this.run = function() {
      if (!this._enabled) {
         throw new Error("Кофеварка выключена");
      }
      if (!waterAmount) {
        console.log('Сухого кофе??');
      } else {
        id = setTimeout(onReady, 3000);
      }
    };

    this.stop = function() {
      clearTimeout(id);
      console.log('STOP');
    };
  }

  var coffee = new CoffeeMachine(1000, 2000);

  coffee.water(2500);
  coffee.enable();
  coffee.run();
  coffee.setReady(function() {
    console.log('%cКушать %cподано!', 'background: green; fontSize: 15px; color: #fff;', 'background: red; fontSize: 15px; color: #CC01;');
  });
  coffee.disable();
})();