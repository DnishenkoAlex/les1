// //     Number

// // const num = 42 //integer целочисленное 
// // const float = 42.42 // float
// // const pow = 10e3 // e3 - добавляет нули, в данном случае 3шт

// // // в console.log() можно передавать несколько значений
// // //выводить данные и писать в строке коментарий +-

// // console.log(pow)

// // // максимальноечисло с которым можно работать в JS
// // console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// // console.log(Math.pow(2, 53) - 1) // = 9007199254740991
// // // миниимальное число с которым можно работать в JS
// // console.log(Number.MIN_SAFE_INTEGER)// = -  9007199254740991



// // console.log('MAX_VALUE', Number.MAX_VALUE)
// // console.log('MIN_VALUE', Number.MIN_VALUE)

// // console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// // console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// // console.log(1 / 0, 2 / 0) // результат - INFINITY



// // //NaN - является числом хоть и переводится как не число
// // //NaN получается когда делать не правильно(2/undefined , 2/'one')
// // console.log(Number.NaN) //NaN - Not A Number
// // //что бы провеить является ли числом пользуют функцию isNaN
// // const www = 2 / 'aaa'
// // console.log(isNaN(www)) // true - NaN

// // const www = 2 
// // console.log(isNaN(www)) // false - не NaN

// // //isFinite проверяет на коенчность
// // console.log(Number.isFinite(Infinity)) //false
// // console.log(Number.isFinite(42)) //true



// // const stingInt = '40'
// // const stringFloat = '40.42'
// // //Number.parseInt - преобразует строку в целое число, десятичные отбрасывает
// // //parseInt - можно без Number 
// // //parseInt или - работает с целым числом, десятичные значения отбрасывает

// // console.log(Number.parseInt(stingInt) + 2) 
// // console.log('привет', parseInt(stingInt) + 2.58)
// // console.log(Number(stingInt) + 2) 

// // если добавить +перед строковой переменной она будет воспринята как число
// // + работает и с целыми и с дробными числами
// // console.log(+stingInt + 2.58) 

// // //parseFloat работает с дробными
// // console.log(parseFloat(stringFloat) + 2.58)
// // console.log(+stringFloat + 2.58)



// // console.log(0.4 + 0.2)
// // // возвращается сторока при использовании toFixed
// // console.log((0.4 + 0.2).toFixed(1)) 

// // // 
// // console.log(parseFloat((0.4 + 0.2).toFixed(1)))
// // console.log(+(0.4 + 0.2).toFixed(1))



// //BigInt тип данных, веели что бы работать с числами болеше 'MAX_SAFE_INTEGER'
// //BigInt число больше чем 9007199254740991, к нему добавляется n
// // BigInt - 9007199254740991999n
// //BigInt работает только с BigInt
// // //BigInt не работает с дробными
// // console.log(Number.MAX_SAFE_INTEGER) // = 9007199254740991

// // console.log(9007199254740991999n)
// // console.log(9007199254740991999.2654n) //error
// // console.log(10n - 5) //error

// // console.log(parseInt(10n) - 5)//преобразовать для взаимодействия
// // console.log(10n - BigInt(5))//преобразовать для взаимодействия

// // console.log(5n / 3n) // = 2 , округляет в меньшую сторону...
// // // = 2 , округляет в меньшую сторону так как биг инт работает только с целыми

// // console.log()
// // console.log()
// // console.log()
// // console.log()




// //   Math

// console.log(Math.PI)//матемарическая постоянна я
// console.log(Math.E)//матемарическая постоянна я
// console.log(Math.sqrt(30)) //извлекает корень квадратный 
// console.log(Math.pow(5,3)) //возведение 5 в 3 степень
// console.log(Math.abs(-42)) //= 42  модуль числа
// console.log(Math.max(42, 12, 13, 422, 4))//определяет max значение
// console.log(Math.min(42, 12, 13, 422, 4))//определяет min значение
// console.log(Math.floor(4.6)) //округление до целого в меньшую сторону
// console.log(Math.ceil(4.3)) //округление до целого в большую сторону сторону
// console.log(Math.round(4.6)) //Округляет до ближайшего целого
// console.log(Math.trunc(4.6)) //удаляет дробные части без округления
// console.log(Math.random())
// console.log(Math)
// console.log(Math)

// // ункция дает рандомное число в диапазоне 10-42, округленное и +1
// function getRandomBetween (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42))





