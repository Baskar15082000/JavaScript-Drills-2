const findCar = require("../problem1");
const inventory = require("../invertory");
const findCarById = findCar(33);
let car = findCarById[0];
console.log(
  "Car " +
    car.id +
    " is a " +
    car.car_year +
    " " +
    car.car_make +
    " " +
    car.car_model
);
