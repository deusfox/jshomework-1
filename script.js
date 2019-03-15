"use strict";

var first,
    second;

let money = prompt("Ваш бюджет на месяц?","30000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-03-14");

console.log(money);
console.log(time);

let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце","Бензин");
let firstAnswer = prompt("Во сколько это обойдётся", "10000");
let secondQuestion = prompt("Введите обязательную статью расходов в этом месяце","Еда");
let secondAnswer = prompt("Во сколько это обойдётся", "6000");

let expenses = {
    first:  firstQuestion+' : '+firstAnswer,
    second: secondQuestion+' : '+secondAnswer
  // secondQuestion: second = [firstQuestion,firstAnswer]; 

//    console.log(expenses[0]," : ",expenses[1]);
}

//console.log(expenses.first);
//console.log(expenses.second);

let AppData = {
    v_Budget: money,
    v_time: time,
    expenses,
    optionalExpenses: null,
    income: null,
    savings: false 
};

let dayBudget = (money - firstAnswer - secondAnswer)/30;
alert(dayBudget)
//console.log(AppData.expenses.first)

 
//console.log(AppData[expenses.firstQuestion]);