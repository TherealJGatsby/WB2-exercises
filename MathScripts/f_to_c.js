// turning Farenheit into Celsius: C = (°F) - 32) * 5/9
// turning Celsius into Farenheit: F = (°C x 1.8) + 32 .
const farenheit = 101;
const celsius = 35;
let fToC = (((farenheit - 32) * 5) / 9);
let cToF = ((celsius * 1.8) + 32);

console.log( farenheit + " degrees Farenheit in celsius is " + fToC.toFixed(2) + " degress");
console.log( celsius + " degrees Celsius in Farenheit is " + cToF.toFixed(2) + " degrees");
