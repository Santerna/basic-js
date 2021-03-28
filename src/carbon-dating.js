const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if ((typeof(sampleActivity) !== 'string') || isNaN(parseInt(sampleActivity))){
    return false;
  }
  
  let activity = parseFloat(sampleActivity);

  if (activity > 15 || activity <= 0) return false;

  let dating = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / ( 0.693 / HALF_LIFE_PERIOD));

  return dating;
};
