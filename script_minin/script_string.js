/// string  - строка

// console.log(typeof name)

// const name = 'Alex'
// const age = 40
// const output = 'меня зовут ' + name + ' и мой возраст ' + age + ' лет'
// console.log(output)

// //примыры выше/ниже одинаковые. Выше менее предпочтительно
// //нижний пример более современный с использованием косых ковычек `` и ${}
// function getAge() {
//     return age
// }
// const name = 'Alex'
// const age = 40
// // const out_put = `меня зовут ${name} и мой возраст ${age}  лет`
// // // можно подставлять значение переменных и функций
// // // можно использовать все характерные выражения
// // const out_put = `меня зовут ${name} и мой возраст ${getAge()}  лет`
// //можно использовать тернарные выражения
// const out_put = `меня зовут ${name} и мой возраст ${age < 20 ? 'a' : 'b'}  лет`

// console.log(out_put)

//использование `` ковычек косых
// const autput = `
// <div>This ib div</div>
// <p>and this is P</p>
// `
// console.log(autput)

//  встроенные методы строк

///////////////////////
// const name = 'Alex'

// console.log(name.length) //количество символов

// console.log(name.toUpperCase())// перевод всего в верхний регистр
// console.log(name.toLowerCase())// перевод всего в нижний регистр
// console.log(name.charAt(3))//определение (3) символа в строке
// console.log(name.indexOf('AL'))//определение с какого индекса начинает сивол/ы
// // если indexOf не нашел необходимое значение выведенся (-1)

// console.log(name.startsWith('alex')) // folse тк написано с маленькой буквы
// console.log(name.startsWith('Alex')) // true

// console.log(name.endsWith('ex'))//проверка булиновая на что заканчивается строка  

// //можно групировать методы
// console.log(name.toLowerCase().startsWith('alex')) // true

// console.log(name.repeat(3))//повторение (3) n разов

// const string = '     password     '
// //пробелы отображаются и индексируются как символы

// console.log(string.trim()) //для Удаления Пробелов пример при заполнения пароля
// console.log(string.trimLeft())//Удаления Пробелов слева
// console.log(string.trimRigth())//Удаления Пробелов справа

//////////////////////
// новый синтаксис с использованеим `` обратных ковычек
// не определенный параметр (s) получается массивом 

function logPerson(s, name, age){
    if (age < 0) {
        age = 'not born yet'
    }

    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
    return `info about person`
}
const personName = 'Alex'
const personAge = 40

const personName2 = 'Nik'
const personAge2 = -1

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)
