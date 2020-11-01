const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  let [
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  ] = Object.values(options);

  for (let i = 0; i < repeatTimes; i++) {
    result += String(str);

    for (let j = additionRepeatTimes; j > 0; j--) {
      if (j > 1) {
        result = result + String(addition) + additionSeparator;
      } else if (j === 1) {
        result = result + String(addition);
      } else continue;
    }

    if (i < repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};
