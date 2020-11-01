const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;

    this.ALPHABET = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    };

    this.CODE = {
      0: "a",
      1: "b",
      2: "c",
      3: "d",
      4: "e",
      5: "f",
      6: "g",
      7: "h",
      8: "i",
      9: "j",
      10: "k",
      11: "l",
      12: "m",
      13: "n",
      14: "o",
      15: "p",
      16: "q",
      17: "r",
      18: "s",
      19: "t",
      20: "u",
      21: "v",
      22: "w",
      23: "x",
      24: "y",
      25: "z",
    };
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Not enough informaion.");
    }

    const messageArr = message.toLowerCase().split("");
    key = key.toLowerCase();
    const messageNumberArray = [];
    const specialSymbols = {};
    for (let i = 0; i < messageArr.length; i++) {
      let letter = messageArr[i];
      if (letter in this.ALPHABET) {
        messageNumberArray.push(this.ALPHABET[letter]);
      } else {
        specialSymbols[i] = letter;
      }
    }

    const keyNumberArray = [];
    let j = 0;
    let k = 0;
    while (j < messageNumberArray.length) {
      if (k >= key.length) {
        k = 0;
      }
      keyNumberArray.push(this.ALPHABET[key[k]]);
      k++;
      j++;
    }

    const cipherArray = [];
    for (let i = 0; i < messageNumberArray.length; i++) {
      cipherArray.push(
        this.CODE[this.getModulSum(messageNumberArray[i], keyNumberArray[i])]
      );
    }

    for (let prop in specialSymbols) {
      cipherArray.splice(prop, 0, specialSymbols[prop]);
    }

    const cipherString = this.direct
      ? cipherArray.join("").toUpperCase()
      : cipherArray.reverse().join("").toUpperCase();

    return cipherString;
  }

  getModulSum(value1, value2) {
    let sum = value1 + value2;
    return sum < 26 ? sum : sum - 26;
  }

  getModulDif(value1, value2) {
    let dif = value1 - value2;
    return dif >= 0 ? dif : dif + 26;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Not enough information.");
    }

    key = key.toLowerCase();
    const messageArray = message.toLowerCase().split("");
    const messageNumberArray = [];
    const specialSymbols = {};
    for (let i = 0; i < messageArray.length; i++) {
      let letter = messageArray[i];
      if (letter in this.ALPHABET) {
        messageNumberArray.push(this.ALPHABET[letter]);
      } else {
        specialSymbols[i] = letter;
      }
    }

    const keyNumberArray = [];
    let j = 0;
    let k = 0;
    while (j < messageNumberArray.length) {
      if (k >= key.length) {
        k = 0;
      }
      keyNumberArray.push(this.ALPHABET[key[k]]);
      k++;
      j++;
    }

    const cipherArray = [];
    for (let i = 0; i < messageNumberArray.length; i++) {
      cipherArray.push(
        this.CODE[this.getModulDif(messageNumberArray[i], keyNumberArray[i])]
      );
    }

    for (let j in specialSymbols) {
      cipherArray.splice(j, 0, specialSymbols[j]);
    }

    const cipherString = this.direct
      ? cipherArray.join("").toUpperCase()
      : cipherArray.reverse().join("").toUpperCase();

    return cipherString;
  }
}
module.exports = VigenereCipheringMachine;
