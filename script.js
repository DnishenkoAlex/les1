let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?'); 
    time = prompt('Введите дату в вормате YYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');  
        
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }   
    }
}
chooseExpenses();

//пасчет дневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay + '.грн');
}
detectDayBudget();

//расчет уровня достатка
function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log('минимальный уровень достатка');
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('средний уровень достатка');
    }else if(appData.moneyPerDay > 2000) {
        console.log('высокий уровень достатка');
    }else {
        console.log('произошла ошибка');
    }
}
detectLevel();



function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений'),
            percent = +prompt('Под какой процент');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for(let i = 1; i <=3; i++) {
        let questionOptExpenses = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();




///////////////////////////
// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a) ==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE
// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a) ==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);
////////////////////////////////////






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