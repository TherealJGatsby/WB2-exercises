const quarter = .25;
const dime = .10;
const nickle = .05;
const pennies = .01;

let cost = 100.01;
let cashGiven = 101.00

let difference = (cashGiven - cost).toFixed(2);
console.log(difference);

let changeInQuarters = Math.floor(difference/quarter);
console.log("Quarters ", changeInQuarters);
console.log("Remaining change after quarters ", difference - changeInQuarters*quarter);
difference = (difference - changeInQuarters*quarter).toFixed(2);

let changeInDimes = Math.floor(difference/dime);
console.log("Dimes ", changeInDimes);
console.log("Remaining change after dimes ", (difference - changeInDimes*dime).toFixed(2));
difference = (difference - changeInDimes*dime).toFixed(2);

let changeInNickles = Math.floor(difference/nickle);
console.log("Nickles ",changeInNickles);
// console.log("Remaining change after dimes", difference - changeInNickles*nickle);
// difference = (difference -changeInDimes*nickle).toFixed(2);

let changeInPennies = Math.floor(difference/pennies);
console.log("Pennies ",changeInPennies);
console.log("Remaining change after pennies", difference - changeInPennies*pennies);
difference = (difference -changeInPennies*pennies).toFixed(2);




