const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catNumber = 0;

  let backyardFlat = backyard.flat();

  for (let cats of backyardFlat) {
    cats === '^^' ? catNumber++ : catNumber;
  }

  return catNumber;
};
