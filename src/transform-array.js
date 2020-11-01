const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (Array.isArray(array)){
    let newArray =[];
    for (let i = 0; i < array.length; i++) {
        if(array[i] !=='--discard-next' && array[i] !=='--discard-prev' && array[i] !=="--double-next" && array[i]!=="--double-prev" ){
          newArray.push(array[i]);
        }
       else if(array[i] === '--discard-next' && i !== array.length-1){
          i++;
        }
        else if(array[i] === '--discard-prev' && array[i - 2] !== '--discard-next'&& i !==0){
          newArray.pop();
        }
       else if(array[i] === '--double-next' && i !== array.length-1){
          newArray.push(array[i+1]);
         
        }
      else if(array[i] ==='--double-prev' && array[i - 2] !== '--discard-next' && i !== 0 ){
          newArray.push(array[i-1]);
        }
      
    }
    return newArray;
  }
  
    throw Error;
  
};