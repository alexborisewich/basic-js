const { NotImplementedError } = require("../extensions/index.js");

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
  latinAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  constructor(switcher) {
    if (switcher === undefined) switcher = true;
    this.direction = switcher;
  }

  validateInput(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
  }

  encrypt(message, key) {
    this.validateInput(message, key);
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = "";
    let keyLetterIndex = 0;
    for (let letter of message) {
      if (keyLetterIndex == key.length) keyLetterIndex = 0;
      if (this.latinAlphabet.includes(letter)) {
        let indexOfEncryptLetter =
          (this.latinAlphabet.indexOf(letter) +
            this.latinAlphabet.indexOf(key[keyLetterIndex])) %
          this.latinAlphabet.length;
        encryptedMessage += this.latinAlphabet[indexOfEncryptLetter];
        keyLetterIndex++;
      } else {
        encryptedMessage += letter;
      }
    }
    if (this.direction) {
      return encryptedMessage;
    } else {
      return encryptedMessage.split("").reverse().join("");
    }
  }

  decrypt(message, key) {
    this.validateInput(message, key);
    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = "";
    let keyLetterIndex = 0;
    for (let letter of message) {
      if (keyLetterIndex == key.length) keyLetterIndex = 0;
      if (this.latinAlphabet.includes(letter)) {
        let indexOfDecryptLetter =
          (this.latinAlphabet.indexOf(letter) +
            this.latinAlphabet.length -
            this.latinAlphabet.indexOf(key[keyLetterIndex])) %
          this.latinAlphabet.length;
        decryptedMessage += this.latinAlphabet[indexOfDecryptLetter];
        keyLetterIndex++;
      } else {
        decryptedMessage += letter;
      }
    }
    if (this.direction) {
      return decryptedMessage;
    } else {
      return decryptedMessage.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
