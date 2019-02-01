"use strict"

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while(isNaN(money) || money =='' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i=0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется", '');
    if  ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {
        console.log ('done');
        appData.expenses[a] = b;   
    } else {
        console.log ('what');
        i--;
    }  
}
}
chooseExpenses();


appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет" + appData.moneyPerDay );

if(appData.moneyPerDay < 100) {
    console.log("У вас низкий уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("У вас средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("У вас высокий уровень достатка");
} else {
    console.log("ошибка");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt ("Под какой процент?");

            appData.monthIncome = save/100/12*persent;
            alert ("Доход с Вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();