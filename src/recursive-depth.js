const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {

  let nestedArray = (arr) => arr.some(el => Array.isArray(el));
  let depth = 1;

  if (nestedArray(arr)) {
    const childArr = arr.reduce((a, c) => a.concat(c), []);
    return depth + this.calculateDepth(childArr);
  } 
  return depth;
  };
}

