// function 
let num = 20;
function showMassege(text) {
    alert(text);
    num = 10;
}

// showMassege(); //вызов функции,без него функция не срабтает
showMassege('привет мир'); 
console.log(num);

//если переменную обьявить внутри функции то то быдет локальной и результат будет 'num is not defined'
//если переменную обьявить за пределами функции она будет глобальной и сработает, !!! при этом внутри функции ее  можно изменять
//если переменную назвать одинаково 'let num' и поместить внутри и снаружи функции то это будут разные переменые
//showMassege - имя функции должно быть глаголом с припиской того над чем выполняется действие  ;
//text - параметры (аргумент) функции - данные с которыми и будет производиться действие, может быть бесконечное множество;

// //Function Expression (Функциональное Выражение). Вызывается только тогад когда код до нее доходит
//                 let sayHi = function() {
//                     alert( "Привет" );
//                 };

// //Function Declaration (Объявление Функции):
//                 function sayHi() {
//                     alert( "Привет" );
//                 }

// function calc(a, b) {
//     return (a + b);
// }
let calc = (a, b) => a + b // пример cтрелочной функции es6

console.log(calc(3,4));
console.log(calc(4,4));



function retVar() {
    let num = 20;
    return num;
} 

let anoutherNum = retVar();
console.log(anoutherNum);

//методы и свойства у строк и чисел
            // методы - это вспомагательные функции
            // свойства - это вспомагательные значения
                //свойства пишутрся без ()
let str = 'test';
console.log(str.length); // это вывод свойства
console.log(str.toUpperCase()); //это вывод метода

let twelve = '12.2';
console.log(Math.round(twelve)); //метод выполняет математическое округление

let twelve = '12.2px';
console.log(parseInt(twelve)); //Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
console.log(parseFloat(twelve));//Функция parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)

