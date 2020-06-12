// // function

// //Function Declaration не является частью выражений начинаются со слова function
// // и обрабатываются сразу вне зависимости от того где обьявлены переменные
// //Можно расположить функции внизу, а их вызов – сверху или наоборот.
// function greet(name) {
//     console.log('Привет - ', name)
// }

// //function Expression
// //Expression создаются в процессе выполнения выражения, в котором созданы, 
// //функция будет создана при операции присваивания greet2 = function

// //const greet2 = function greet2(name) эти записи равнозначны
// const greet2 = function(name) {
//     console.log('Тевирп - ', name)
// }

// greet('Лана')
// greet2('Анал')

// console.log(typeof greet)
// console.log(typeof greet2)
// console.dir(greet)
// console.log(greet2)


// // анонимные функции 
// //Функциональное выражение,которое не записывается в переменную - анонимной функ
// let counter = 0
// const interval = setInterval(function() {
//     if(counter === 5) {
//         setInterval(interval)
//     }else {
//         console.log(++counter)
//     }
//     // clearInterval(interval)
//     // console.log(++counter)
// }, 1000)

// ///// /////
// //вариант с именованной функцией
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

// function showOk() {
//   alert( "Вы согласились." );
// }

// function showCancel() {
//   alert( "Вы отменили выполнение." );
// }

// // использование
// ask("Вы согласны?", showOk, showCancel);
// ////////
// //вариант с анонимной функцией
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   ); 
// ////////////////////////////////////

////3) стрелочные функции (новый синтаксис)
//обычная функция
const greet2 = function(name) {
        console.log('Тевирп - ', name)
}

//стрелочная вариант 1 
const arrow = (name) => {
    console.log('Тевирп - ', name)
}
//стрелочная вариант 2
const arrow = name => console.log('Тевирп - ', name)
//если параметр 1шт то () модно не использовать
//так же если функция состоит из 1й строчки можно не писать {}

//стрелочная вариант 3
const pow2 = num => {
    return num ** 2
}

console.log(pow2(2))

//стрелочная вариант 4
//если параметров больше 1шт то нужно писать  ()
//так же если параметров нету , то нужно писать ()
const arrow = (name, age) => console.log('Тевирп - ', name)
const arrow = () => console.log('Тевирп - ', name)

///////////   параметры функций по умолчанию
const sum = (a, b) => a + b
console.log(41 + 1)

//пример ниже принимается значение параметров по умолчанию
const sum = (a = 40, b = a * 2) => a + b
// если указать при вызове другие параметры то они перезапишутся
//если параметны не указывать при вызове то они останутся по умолчанию
console.log(sum())
console.log(sum(50, 1))

/////
function sumAll(...all) {
    let result = 0
    for ( let num of all) {
        result += num
    }
    return result
}
const res = sumAll(1, 2, 3, 4, 5)
console.log(res)


///////  Замыкание 
function creatMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}
const logWithLastname = creatMember('Alex')
console.log(logWithLastname(' => Nikitenko'))
console.log(logWithLastname(' => Dnishenko'))