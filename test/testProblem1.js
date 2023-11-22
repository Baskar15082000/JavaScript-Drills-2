const findCar = require("../problem1");
const inventory = require("../inventory");
const carInfo = findCar(inventory, 33);
let car = carInfo[0];
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
