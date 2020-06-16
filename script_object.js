
// /////  Обьекты

// //  обьект сзодается с помощью {} фигурных скобок
// // внутри {} перечисляются пары - ключ: значение
// //после пары (ключ: значение) ставится (,) запятая
// // можно задавать любые типы данных
// //Нельзя прсто использовать пробел в названии ключей
// //'complex key' - использовать кавычки дял написания сложных кобчей с пробелом
// const person = {
//     name: 'Alex',
//     age: 40,
//     leng: ['en', 'ru', 'ua'],
//     isProgrammer: true,
//     'complex key': 'complex value',//пример сложный ключ
//     ['key_' + (1 + 3)]: 'computed key',//пример сложный ключ
//     //greet: function{}  - такой синтаксис использовался раньше
//      //greet{} - такой синтаксис используется сейчас
//     greet() { //функция внутри обьекта - метод
// console.log('greet from person')
//     }
// }
// console.log(person)
// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person['key_4'])
// person.greet()

// person.age++ //можноработать как и с числми
// person.leng.push('by') // добавление данных в массив

// person['key_4'] = undefined // удаление значения
// delete person['key_4'] //полное удаление пары (ключ/значение)

// console.log(person)
// console.log(person['key_4'])


// ///// деструктуризация кода
// //так было раньше
// const name = person.name
// const lang = person.lang
// const age = person.age

// //так сейчас (новый синтаксис)
// const {name, lang, age} = person 
// //создается новая переменная с тем же именем {name, lang, age} из обьекта person 

// const {name: firstName = 'Иванушка', lang, age} = person 
// //можно поменять имя новой переменной по принципу (ключ: значение), где ключ - name, из обьекта person, а значение - новое название переменной 
// // можно поставить значение по умолчанию. 'Иванушка' будет подставляться при undefined значения name


///////////////
// const person = {
//     name: 'Alex',
//     age: 40,
//     leng: ['en', 'ru', 'ua'],
//     isProgrammer: true,
//     greet() { //функция внутри обьекта - метод
// console.log('greet from person')
//     }
// }

//цикл for in испльзуется для итерации обьектов
//цикл for in бежит не только по ключам обьекта но и может заходить в его прототип
//нужно делат проверку 
// for(let key in person) {
//     if(person.hasOwnProperty(key)) { //если у person есть свое свойство которое не находится в прототипе (key), тогда запускаются consol.log
//         console.log('key: ', key)
//         console.log('value: ', person[key])
//     }
// }

//////////////

// const person = {
//     name: 'Alex',
//     age: 40,
//     leng: ['en', 'ru', 'ua'],
//     isProgrammer: true,
//     greet() { //функция внутри обьекта - метод
// console.log('greet from person')
//     }
// }
// //глобальный обьект Object и метод keys
// //  при использовании глобального обьекта Object.keys не нужно делать проверку тк он не бежит по прототипу
// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })
// ////
// //можно не создавать отдельную переменную так как Object.keys возвращает массив и сразу у него можно вызвать метод forEach
// Object.keys(person).forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })

//////////////////////

// Контекст
// this - имеется ввиду в данном случае обьект person
const person = {
    name: 'Alex',
    age: 40,
    leng: ['en', 'ru', 'ua'],
    isProgrammer: true,
    greet() { //функция внутри обьекта - метод
        console.log('greet from person')
    },
    info() {
    console.info('Информация про человека по имени:', this.name)//вместо this может быть написано person
    }
}
person.info()





const logger = {
    keys() {
        console.log('Object.keys:  ', Object.keys(this))
    },
    keysAndValues() {
//стрелочные функции не создают собственный контекст
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    },
// function сщздает собственный контекст, по этому нужно использовать метод .bind
    //         Object.keys(this).forEach(function(key) {
    //             console.log(`"${key}": ${this[key]}`)
    //         }.bind(this))   
    // }   
    
    withParams(top = false, between = false, bottom = false) {
        if(top) {
            console.log('---start---')
        }

        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
            if(between && index !== Array.length - 1) {
                console.log('------')
            }
        })

        if(bottom) {
            console.log('---end---')
        }
    }
}

// метод .bind привязывает определенный контекст который мы выбираем
//  метод .bind возвращяет функцию которую нужно вызывать
//const bound = logger.keys.bind(logger) // ['keys]
// const bound = logger.keys.bind(person)  // Object.keys: ["name", "age", "leng", "isProgrammer", "greet", "info"]
// bound()

// метод .call так же как и .bind привязывает контекст и возвращает функцию Но вызывать его не нужно
// logger.keys.call(person)






logger.withParams.call(person, true, true, true) //принимает много параметров
logger.withParams.apply(person, [true, true, true])//принимает 2 параметра? 2й параметр это всегда массив