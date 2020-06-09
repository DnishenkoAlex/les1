//ООП function Clock({ template }) {
  
    class Clock {
        constructor({ template }) {
          this.template = template;
        }
      
        render() {
          let date = new Date();
      
          let hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
      
          let mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
      
          let secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
      
          let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
      
          console.log(output);
        }
      
        stop() {
          clearInterval(this.timer);
        }
      
        start() {
          this.render();
          this.timer = setInterval(() => this.render(), 1000);
        }
      }
      
      
      let clock = new Clock({template: 'h:m:s'});
    //   clock.start();










// // // //масивы

// // let arr = ['first', 2, 3, 'four'];
// // // arr[99] = 99; //такой способ считается ошибкой выводится так [ 1, 2, 3, 4, <95 empty items>, 99 ]
// // // console.log(arr.length); // результат будет 100 тк length счтается (последний индекс + 1)


// // // for(let i = 0; i < arr.length; i++) {
// // //     console.log(arr[i]);
// // // }
// // // arr.pop(); // pop удаляет последнее значение массива
// // // arr.push('4'); //push добавляет новое значение массива в конце 
// // // arr.shift(); // shift удаляет первое значение массива
// // // arr.unshift('1');//unshift добавляет новое значение в начало массива
// // // console.log(arr.length);

// // arr.forEach(function(item, i, mass) {
// //     console.log(i + ': '+ item + ' (массив: ' + mass + ')');
// // })

// // console.log(arr);

// // let mass = [1, 3, 4, 6, 7];
// // for (let key of mass) {
// //     console.log(key);
// // }







// // // // function 
// // // let num = 20;
// // // function showMassege(text) {
// // //     alert(text);
// // //     num = 10;
// // // }

// // // // showMassege(); //вызов функции,без него функция не срабтает
// // // showMassege('привет мир'); 
// // // console.log(num);

// // // //если переменную обьявить внутри функции то то быдет локальной и результат будет 'num is not defined'
// // // //если переменную обьявить за пределами функции она будет глобальной и сработает, !!! при этом внутри функции ее  можно изменять
// // // //если переменную назвать одинаково 'let num' и поместить внутри и снаружи функции то это будут разные переменые
// // // //showMassege - имя функции должно быть глаголом с припиской того над чем выполняется действие  ;
// // // //text - параметры (аргумент) функции - данные с которыми и будет производиться действие, может быть бесконечное множество;

// // // // //Function Expression (Функциональное Выражение). Вызывается только тогад когда код до нее доходит
// // // //                 let sayHi = function() {
// // // //                     alert( "Привет" );
// // // //                 };

// // // // //Function Declaration (Объявление Функции):
// // // //                 function sayHi() {
// // // //                     alert( "Привет" );
// // // //                 }

// // // // function calc(a, b) {
// // // //     return (a + b);
// // // // }
// // // let calc = (a, b) => a + b // пример cтрелочной функции es6

// // // console.log(calc(3,4));
// // // console.log(calc(4,4));



// // // function retVar() {
// // //     let num = 20;
// // //     return num;
// // // } 

// // // let anoutherNum = retVar();
// // // console.log(anoutherNum);

// // // //методы и свойства у строк и чисел
// // //             // методы - это вспомагательные функции
// // //             // свойства - это вспомагательные значения
// // //                 //свойства пишутрся без ()
// // // let str = 'test';
// // // console.log(str.length); // это вывод свойства
// // // console.log(str.toUpperCase()); //это вывод метода

// // // let twelve = '12.2';
// // // console.log(Math.round(twelve)); //метод выполняет математическое округление

// // // let twelve = '12.2px';
// // // console.log(parseInt(twelve)); //Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
// // // console.log(parseFloat(twelve));//Функция parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)

// // // //collbacj function 
// // // function first(){
// // //     setTimeout(function() {
// // //         console.log(1);
// // //     }, 0 );
// // // }

// // // function second(){
// // //     console.log(2);
// // // }
// // // first();
// // // second();

// // // function learnJS(lang, callback) {
// // //     console.log('Я учу ' + lang);
// // //     callback();
// // // }




// // // function doHomework(subject, callback) {
// // //     alert('Начало моей ${subject} домашки.');
// // //     callback();
// // // }

// // // doHomework('math', function() {
// // //     alert('Конец моей домашки');
// // // });

// // // function doHomework(subject, callback) {
// // //     alert(`Starting my ${subject} homework.`);
// // //     callback();
// // //   }
  
// // // doHomework('math', function() {
// // //     alert('Finished my homework');
// // //   });

// // // let func_multiply = function("arg1", "arg2", "return arg1 * arg2");
// // // func_multiply(5, 10);

// // // //object обьекты

// // // let obj = new Object();


// // // //обьект - свойства помещенные внутрь {}
// // // let options = {
// // //     width: 1024, //свойства обьекта
// // //     height: 1024,
// // //     name: 'Tets'
// // // }

// // // //добавление или удаление свойств обьекта 
// // // options.bool = false; //добавление свойств обьекта
// // // options.coloe = {    // добавление оьекта внутрь свойства обьекта
// // //     border: 'black',
// // //     bc: 'red'
// // // }

// // // delete options.width; //удаление свойства

// // // console.log(options);

// // // //цикл перебирающий всойства обекта 
// // // for (let key in options) { 
// // //     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// // // }


// // // // вовозится количество свойств обьекта
// // // console.log(Object.keys(options).length);

// // let ans = prompt('', '');
// //     arr = [];

// // arr = ans.split(',');
// // console.log(arr);

// // let arr = ['kjb0', 'jhbcs', 'jwhfb']
// // console.log(arr);

// // var fruits = ['Яблоко', 'Банан'];
// // fruits.forEach(function(item, index, array) {
// //     console.log(item, index, array);
// //   });


// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100,
// };

// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);




// //начало калькулятора
// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('введите первое значение?', 0);
//       this.b = +prompt('введите второе значение', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() ); // конец калькулятора