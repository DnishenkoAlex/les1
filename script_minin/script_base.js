// // массивы
// const cars = ['bmw', 'mersedes', 'opel']
// console.log(cars)

// const carss = new Array('bmw', 'mersedes', 'opel')
// console.log(carss)


// carss[carss.length] = 'ford'
// console.log(carss) // 4 

// //циклы 

// const cars = ['bmw', 'mersedes', 'opel']
// // cars[cars.length] = 'ford'

// // for (let i = 0; i < cars.length; i++) {
// //     let car = cars[i]
// //     console.log(car)
// // }

// for (let car of cars) {
//     console.log(car) 
// }


// // обьекты (групировка)
//  - const perosn = new Object({})  // варианту синтаксиса
//  - const person = {}  // варианту синтаксиса

 const person = {
    firstName: 'Alex',
    lastName: 'Dnishenko',
    year: 1980,
    lang: ['ru', 'en'],
    hasWife: true,
    greet: function() { // метод а не функция 
        console.log('greet') 
    }
 }


// способы вызова свойств
//свойства (ключи) можно менять добавлять удаться и тд
//свойства (ключи) можно использовать любые типы данных
console.log(person) //выводятся все данные
console.log(person.lastName) //выводятся с помощью точки
console.log(person['lastName']) //выводятся с помощью квадратных скабок и кавычек
person.greet()//выводится метод, так же как и функция
console.log(person.lastName)

const key = 'lang' //динмические ключи
console.log(person[key]) //если вызывается переменная то кавычки не используются












