const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== "string") {
    String(str)
  };
  if (!options) return str;
  let repeatTimes = +options.repeatTimes;
  if (isNaN(repeatTimes) == true){
      repeatTimes = 1;
  };
  let separator = String(options.separator);
  if (separator === 'undefined') {
    separator = '+'
  };
  let addition = String(options.addition);
  if (addition === 'undefined') {
    addition = '';
  };
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = String(options.additionSeparator);
  if (additionSeparator === 'undefined') {
    additionSeparator = '|';
  };
  let newStr = '';
  let substring  = '';
  if (isNaN(additionRepeatTimes) == true) {
      substring = addition;
  } else {
    substring = (addition + additionSeparator).repeat(additionRepeatTimes);
    substring = substring.slice(0, substring.length - additionSeparator.length);
  };
  newStr = (str + substring + separator).repeat(repeatTimes);
  return newStr.slice(0, newStr.length - separator.length);
};
  