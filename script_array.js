/////  Массивы
//вариант написания 1
// const carss = new Array('форд', 'форд', 'бмв', 'мерседес')
// // в обьектах можно хранить все типы данных 

// //вариант написания 2
// const cars = ['мазда', 'форд', 'бмв', 'мерседес']

// const fib = [1, 1, 2, 3, 5, 8, 13]

// console.log(cars)
// методы в массивах
//прототипы - набор взаимосвязаных обьектов с помощью которых...
// ...мы добавляем функционал для структур данных

//метод - функция вызываемая в контексте обьекта, пример   cars.push()

///// .indexOf работает с примитивными данными: числа, строчки
// const index = cars.indexOf('бмв') // .indexOf определяпет индекс элемента
// console.log(cars[index]) // 'бмв' по индексу выводит элемент
// cars[index] = 'порше' // замена значения 'бмв' на 'порше'
// console.log(cars)

// /// .findIndex  является циклом
// const people = [
//     {name: 'Alex', budget: 4200},
//     {name: 'Al', budget: 4100},
//     {name: 'Lex', budget: 4000}
// ]
// const index = people.findIndex(function(person) {
//     return person.budget === 4000
// })

// const person = people.find(function(person) {
//     return person.budget === 4100
// })

// console.log(person, index)  //с . вместо [] получается undefined
// let findedPerson
// for(const person of people) {
//     if (person.budget === 4000) {
//         findedPerson = person
//     }
// } 
// два равнозначных примера , выше с помощью цикла for of...
// ниже стрелочная функция по разному написаная 
// const person = people.find((person) => { return person.budget === 4100 })
// const person = people.find(person => person.budget === 4100)
// console.log(person)

// //////добавление в конец масива
// cars.push('рено')//добавляет элемент в массив после последнего (предпочтительно)
// cars[cars.length] = 'порше' //добавление элементов в массив после последнего 
// ///////добавление в начало массива
// cars.unshift('Волга')//добавляет элемент в начало массива 
// /////удаление первого элемента
// cars.shift() //удаляет из массива первый элемент массива и возвращает его
// //////удаление последнего элемента
// cars.shift() //удаляет из массива последний элемент массива и возвращает его

// cars.reverse()//разворачивает массив в обратном порядке

const cars = new Array('форд', 'форд', 'бмв', 'мерседес')

// console.log(cars.includes('форд'))//true/false, определяет есть ли значение в массиве

//  .map преобразовываетданные и возвращает новый массив
const upperCase = cars.map(car => {return car.toUpperCase()}) //
console.log(cars) //[ 'форд', 'форд', 'бмв', 'мерседес' ]
console.log(upperCase) //[ 'ФОРД', 'ФОРД', 'БМВ', 'МЕРСЕДЕС' ]

const fib = [1, 1, 2, 3, 5, 8, 13]
const fibbb = num => num ** 2
const fib2 = fib.map(fibbb)
/// .filter метод фильр фильтрует
const filteredNumber = fib2.filter(num => num > 20)

console.log(fib2) //[1,  1,   4, 9, 25, 64, 169]
console.log(filteredNumber) //[1,  1,   4, 9, 25, 64, 169]

///  
// метод .reduce
const people = [
        {name: 'Alex', budget: 5000},
        {name: 'Al', budget: 4500},
        {name: 'Lex', budget: 4000},
        {name: 'Lexxx', budget: 3500}
    ]

// вариант 1    
const allBudget = people.reduce(function(acc, person) {
    if(person.budget > 3999) {
        acc += person.budget       
    }   
    return acc
}, 0)
console.log(allBudget)

// вариант 2
//ченинг - когда подряд вызываются несколько методов
const allBudget = people.filter(person => person.budget > 3999).reduce((acc, person) => {
    acc += person.budget    
    return acc
}, 0)
console.log(allBudget)

// вариант 2-а
//ченинг - когда подряд вызываются несколько методов
const allBudget = people
    .filter(person => person.budget > 3999)
    .reduce((acc, person) => {
        acc += person.budget    
        return acc
    }, 0)
console.log(allBudget)

// вариант 3
const allBudget = people.reduce((acc, person) => {
    if (person.budget > 3999) {
        acc += person.budget    
    }
    return acc
}, 0)
console.log(allBudget)

/////////// //задача 1
// const text = 'привет мы учим JavaScript'
// const reversText = text.split('').reverse().join('')
// //.split()делит строку и возвращает массив
// //('') укавывается по какому знаку делится, (',')(' ')
// //.join('') обьединяет массив в строку
// //('') укавывается символ-знак через который обьединяет, (',')(' ')
// console.log(reversText)







