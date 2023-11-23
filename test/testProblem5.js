const inventory = require("../inventory");
const findCarYears = require("../problem4");
const carYears = findCarYears(inventory);

const findOlderCars = require("../problem5");

let year = 2000;

const result = findOlderCars(inventory, carYears, year);
console.log(result.length);
