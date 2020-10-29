const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let newArr = [];
  if (Array.isArray(array)) {
    for (let arr of array) {
      if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
          newArr.push(arr[i]);
          if (arr[i] === "--discard-next") {
            if (i != arr.length - 1) {
              i += 2;
              newArr.pop(arr[i]);
            } else {
              newArr.pop(arr[i]);
            }
          } else if (arr[i] === "--discard-prev" ){
              if(i !== 0) {
                newArr.pop(arr[i - 1]);
                newArr.pop(arr[i])
          } else{
            newArr.pop(arr[i])
          } 
           } else if (arr[i] === "--double-next"){
              if(i != arr.length - 1) {
                newArr.pop(arr[i]);
                newArr.push(arr[i + 1]);
          } else{
            newArr.pop(arr[i]);
          }
          } else if (arr[i] === "--double-prev"){
              if(i !== 0) {
            newArr.pop(arr[i]);
            newArr.push(arr[i - 1]);
          } else{
            newArr.pop(arr[i]);
          }
              
        }
        else continue;

      } 
    }else {
        for (let i = 0; i < array.length; i++) {
            newArr.push(array[i]);
            if (array[i] === "--discard-next") {
              if (i != array.length - 1) {
                i += 2;
                newArr.pop(array[i]);
              } else {
                newArr.pop(array[i]);
              }
            } else if (array[i] === "--discard-prev" ){
                if(i !== 0) {
                  newArr.pop(array[i - 1]);
                  newArr.pop(array[i])
            } else{
              newArr.pop(array[i])
            } 
             } else if (array[i] === "--double-next"){
                if(i != array.length - 1) {
                  newArr.pop(array[i]);
                  newArr.push(array[i + 1]);
            } else{
              newArr.pop(array[i]);
            }
            } else if (array[i] === "--double-prev"){
                if(i !== 0) {
              newArr.pop(array[i]);
              newArr.push(array[i - 1]);
            } else{
              newArr.pop(array[i]);
            }
           }
          else continue;
        }
        return newArr;
      }
    }
    return newArr;
  } else {
    throw new Error("Not an Array");
  }
}