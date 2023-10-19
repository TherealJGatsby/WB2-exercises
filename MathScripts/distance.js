// Distance formula: (x2 - x1) (y2 -y1): A^2 + B^2 = C^2

let x2 = 9;
let x1 = 7;
let y2 = 5;
let y1 = 10;
let a = (x2 - x1);
let b = (y2 - y1);

let c = (a * a) + (b * b);
let distance = Math.sqrt(c);
console.log(distance);
