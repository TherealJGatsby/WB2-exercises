// In this exercise I created constant variables with a fixed number of my assets and my debts
const totalSavings = 10000000;
const carAsset = 5000;
const homeAsset = 500000;
const creditCardDebt = 3000;
const yatchMonthlyFee = 20000;

// In this portion of my code I declared to variables using let, I added my total assets and added my total debts as well.
let totalAssets = totalSavings + carAsset + homeAsset;
let totalDebts = creditCardDebt + yatchMonthlyFee;

// In this portion of my code I declared a variable using let to demostrate the formula I used to show my total Networth.
let totalNetworth = totalAssets - totalDebts;

console.log("My total Networth is: " + totalNetworth);
