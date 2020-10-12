const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(userDate) {
  let month = undefined;

  if (userDate === undefined) {
    return "Unable to determine the time of year!";
  
} else if (Object.prototype.toString.call(userDate) !== '[object Date]' || isNaN(userDate) ) {
  throw new Error("Error");
} else
  {
    let month = userDate.getMonth();

    if (month === 0 || month === 1 || month === 11) {
      return "winter";
    } else if (month === 2 || month === 3 || month === 4) {
      return "spring";
    } else if (month === 5 || month === 6 || month === 7) {
      return "summer";
    } else month === 8 || month === 9 || month === 10;
    return "fall";
  }
};
