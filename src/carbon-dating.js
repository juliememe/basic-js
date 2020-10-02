const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if( typeof sampleActivity !== String){
        return false;
    }
    let num = parseFloat(sampleActivity);

    return Math.ceil((Math.log(MODERN_ACTIVITY / num)) /  (0.693/ HALF_LIFE_PERIOD));
};
