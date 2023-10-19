// In this exercise I will create a tip amount on a total bill 
const spaghettiMeatBalls = 15.99;
const cocaCola = 2.99;
const chickenAlfredo = 16.99;

const standardTip = .2;

let totalBillAmount = spaghettiMeatBalls + chickenAlfredo + cocaCola;

let tipAmount = totalBillAmount * standardTip;

console.log("The standard tip amount on a bill is usually 20% which comes out to: " + tipAmount.toFixed(2) + 
" in your bill. ");
console.log("Your total bill amount with tip inclueded comes out to: " + (totalBillAmount + tipAmount).toFixed(2));