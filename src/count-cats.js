const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let counter = 0;
  for (const cat of backyard) {
    for(let everyCat of cat){
    if (everyCat === "^^") {
      counter++;
    }
  }
}
  if (counter === 0) {
    return 0;
  } else {
    return counter;
  }
}
