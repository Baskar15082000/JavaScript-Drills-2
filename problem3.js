// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
//Execute a function to Sort all the car model names into alphabetical order and
//log the results in the console as it was returned.

function createCarModel(inventory) {
  const carModel = inventory.map((a) => a.car_model);

  return carModel;
}

function sortCarModels(inventory) {
  const sortedCars = createCarModel(inventory);
  sortedCars.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return sortedCars;
}
module.exports = sortCarModels;
