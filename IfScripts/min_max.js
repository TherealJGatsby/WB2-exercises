// displays the largest number

const a = 1;
const b = 11;
const c = 14;

let displayValue = "";

if (c >= b && c >= a) {
    displayValue = "The largest number is " + c ;
}
else if (b >= a) {
    displayValue = "The largest number is " + b;
}
else {
    displayValue = "The largest number is " + a;
}

console.log(displayValue);


// displays the smallest number 
let displayNumber = "";

if (c <= b && c <= a) {
    displayNumber = "The smallest number is " + c ;
}
else if (b <= a) {
    displayNumber = "The smallest number is " + b;
}
else {
    displayNumber = "The smallest number is " + a;
}

console.log(displayNumber);
