// displays the largest number

const a = 1;
const b = 11;
const c = 14;

let displayValue = "";

if (a >= b && a >= c) {
    displayValue = "The largest number is " + a;
}
else if (b >= c) {
    displayValue = "The largest number is " + b;
}
else {
    displayValue = "The largest number is " + c;
}

console.log(displayValue);


// displays the smallest number 
let displayNumber = "";

if (a <= b && a <= c) {
    displayNumber = "The smallest number is " + a ;
}
else if (b <= c) {
    displayNumber = "The smallest number is " + b;
}
else {
    displayNumber = "The smallest number is " + c;
}

console.log(displayNumber);
