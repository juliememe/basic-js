const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 
 
    calculateDepth(arr) {
      let depth = 1;
      let tmp = 1;
  
      if (Array.isArray(arr)) {
        arr.forEach( el => {
          if (Array.isArray(el)) {
            tmp += this.calculateDepth(el);
          }
          if (tmp > depth) {
             depth = tmp;
           }
           tmp = 1;
        });
      }
      return depth;
    }
  };
  