const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!isNaN(date.getTime())) {
  let season = date.getMonth();

  if (season >= 0 && season < 2 || season === 11) return 'winter';
  if (season >= 2 && season < 5) return 'spring';
  if (season >= 5 && season < 8) return 'summer';
  if (season >= 8 && season < 11) return 'autumn';
  } else {
    return false;
  }
};
