// in this exercise I will be using the rule of 72 to see how long it will take me to double my money.
const totalSavings = 10500;
const interestRate = 6.5;
console.log("At a " + interestRate + " interest rate, your savings account will be worth " + (totalSavings * 2)
+ " in " + (72/interestRate).toFixed(2) + " years");