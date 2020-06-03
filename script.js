'use strict'


let money = +prompt('Ваш бюджет на месяц?'); 
let time = prompt('Введите дату в вормате YYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        
    }
    
};

appData.moneyPerDay = appData.budget / 30

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('минимальный уровень достатка');
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('средний уровень достатка');
}else if(appData.moneyPerDay > 2000) {
    console.log('высокий уровень достатка');
}else {
    console.log('произошла ошибка')
}





//задания из обучения ниже

// let num = 50;

// if (num < 49) {
//     console.log('неверно')
// } else if (num > 100) {
//     console.log('много')
// } else {
//     console.log('верно')   
// };

// (num == 50) ? console.log('верно') : console.log('неверно');


// switch (num) {
//     case num < 49:
//         console.log('неверно');
//         break;
//     case num > 100:
//         console.log('много');
//         break;
//     case num > 80:
//         console.log('еще много');
//         break;
//     case 50:
//         console.log('верно');
//         break; 
//     default:
//         console.log('что-то не так');
//         break;
// }

// let num = 50;
// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55)

// for (let num = 55; num < 60; num++) {
//     if (num == 58) {
//         break;
//     }
//     console.log(num);
// }