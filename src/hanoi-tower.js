const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let obj ={

        turns: (Math.pow(2, disksNumber)-1),
        seconds: Math.trunc(((Math.pow(2, disksNumber)-1) / (turnsSpeed/3600)))
    }

  return  obj;
};
