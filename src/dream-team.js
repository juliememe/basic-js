const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members === null) {
    return false;
  } else {
    
    let list = [];
    for (const names of members) {
      if (typeof names == "string") {
        list.push(names.toUpperCase().trim());
      }
    }
    return list
      .sort()
      .reduce((acc, currentValue) => acc + currentValue[0], "");
  }
};
