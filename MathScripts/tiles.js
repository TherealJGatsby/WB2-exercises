// In this exercise I will be tiling a room 

const width = 10;
const length = 35;
const boxes = 12;

let area = width * length;
let boxesNeeded = area / boxes;
let additionalBoxes = boxesNeeded * .1;

let totalBoxesNeeded = boxesNeeded + additionalBoxes;

console.log("For a room with demensions of 35 x 10, you will need: " + totalBoxesNeeded.toFixed(0) + " boxes. ");