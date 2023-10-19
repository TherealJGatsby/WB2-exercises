const numberOfStudents = 20;
const pizzaBoxes = 7;
const slicesPerBox = 8;
const teacherOrMe = 1;

let pizzaSlicesPerPerson = ((pizzaBoxes * slicesPerBox) / (numberOfStudents + teacherOrMe));
let PizzaSlicesRemaining = ((pizzaBoxes * slicesPerBox) % (numberOfStudents + teacherOrMe));

// console.log(Math.floor(pizzaSlicesPerPerson));
// console.log(PizzaSlicesRemaining);

console.log("I am throwing a Pizza Party for my class of 20 and myself, I bought 7 boxes of pizza with 8 slices each " +
"I have  calculated the math and have determined that each student and myself will receive " + Math.floor(pizzaSlicesPerPerson) + " each " +
" with " + PizzaSlicesRemaining + " remaining. ");


