const passengersPerVan = 15;
const numberOfPassengers = 38;
const costPerVan = 250;

let numberOfVansNeeded = numberOfPassengers / passengersPerVan;
let costPerRentals = numberOfVansNeeded * costPerVan;
let costPerPassenger = ((costPerRentals / numberOfVansNeeded) / passengersPerVan);

console.log("For a group of 38 who are on tour, the number of vans that they will need is " + Math.ceil(numberOfVansNeeded)
+ " which comes out to a total of: " + costPerRentals.toFixed(2) + " which comes out to " + costPerPassenger.toFixed(2) +
 " per individual passenger.");