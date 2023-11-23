// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.
// Execute a function and return an array that only contains BMW and Audi cars.
// Once you have the BMWAndAudi array, use JSON.stringify() to show the results
//of the array in the console.
function audiAndBmw(inventory) {
  const BMWAndAudi = inventory.filter((car) => {
    if (car.car_make === "Audi" || car.car_make === "BMW") {
      return car;
    }
  });
  return BMWAndAudi;
}
module.exports = audiAndBmw;
