const inventory = require("../inventory");
const findAudiAndBMW = require("../problem6");
const audiAndBMW = findAudiAndBMW(inventory);
console.log(JSON.stringify(audiAndBMW));
