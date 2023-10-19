const monthlyIncome = 8565.38;
const taxes = .23;

let taxesWithheld = monthlyIncome * taxes;
let takeHomeIncome = monthlyIncome - taxesWithheld;

console.log("You paid " + taxesWithheld.toFixed(2) + " in taxes this month. Uncle Sam Thanks you ");
console.log("Your monthly take home income is " + takeHomeIncome.toFixed(2));