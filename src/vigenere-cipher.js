const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  constructor(n) {
    if (n == null || n == true) {
      this.flag = true;
    } else {
    this.flag = n;
    }
  }

  encrypt(word, key) {
    if (word == null || key == null) {
      throw new Error ("Incorrect arguments!")
    }

    let wordArr = word.toUpperCase().split("")
    let keyArr = key.toUpperCase().split("")
    let result = ""
    let index = 0;

    for (let i = 0; i < wordArr.length; i++) {
      if (key.length-1 < index) {
        index = 0;
      }
      if (wordArr[i].match(/[A-Z]/)) {
        let encrypt = this.arr_EN.indexOf(wordArr[i]) + this.arr_EN.indexOf(keyArr[index])
        if (encrypt > 25) { encrypt -= 26; }
        result += this.arr_EN[encrypt]
        index++;
      } else {
        result += wordArr[i]
      }
    }

    if (this.flag) {
      return result;
    } else {
      return result.split("").reverse().join("")
    }
  }

  decrypt(word, key) {
    if (word == null || key == null) {
      throw new Error ("Incorrect arguments!")
    }

    let wordArr = word.toUpperCase().split("")
    let keyArr = key.toUpperCase().split("")
    let result = ""
    let index = 0;

    for (let i = 0; i < wordArr.length; i++) {
      if (key.length-1 < index) {
        index = 0;
      }
      
      if (wordArr[i].match(/[A-Z]/)) {
        let encrypt = this.arr_EN.indexOf(wordArr[i]) - this.arr_EN.indexOf(keyArr[index])
        if (encrypt < 0) { encrypt += 26; }
        result += this.arr_EN[encrypt]
        index++;
      } else {
        result += wordArr[i]
      }
    }

    if (this.flag) {
      return result;
    } else {
      return result.split("").reverse().join("")
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
