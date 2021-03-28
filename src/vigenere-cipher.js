const CustomError = require("../extensions/custom-error");

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const table=[
            ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z'],
            ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A'],
            ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B'],
            ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C'],
            ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D'],
            ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E'],
            ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F'],
            ['H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
            ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
            ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            ['L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
            ['M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
            ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
            ['O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
            ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
            ['Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
            ['R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'],
            ['S', 'T', 'U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
            ['T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'],
            ['U', 'V', 'W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
            ['V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'],
            ['W',	'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'],
            ['X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'],
            ['Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',	'X'],
            ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y']  
]

const charcodeStart = 65;

class VigenereCipheringMachine {
  constructor (isDirect = true){
    this._ReverseFlag = !isDirect;
  };

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Invalid message or key');

    let upperKey = key.toUpperCase();
    let noSpaceKey = upperKey.replace(/\s/g, '');

    let upperMessage = message.toUpperCase();
    let noSpaceMessage = upperMessage.trim();

    let result = [];

    let kLength = noSpaceKey.length;
    let mLength = noSpaceMessage.length;

    for (let i = 0, n = 0; i < mLength; i+=1, n+=1){
      let messageChar = noSpaceMessage[i];

      if (!~abc.indexOf(messageChar)){
        result.push(messageChar);
        n--;
        continue;
      }

      let messageCharCode = messageChar.charCodeAt(0);

      let shiftedRowIndex = noSpaceKey.charCodeAt(n % kLength) - charcodeStart;
      let shiftedCharIndex = messageCharCode - charcodeStart;
      result.push(table[shiftedRowIndex][shiftedCharIndex]);
    }
    if (this._ReverseFlag === true) return result.reverse().join('');
    return result.join('');
  }
    
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Invalid message or key');
    
    let upperKey = key.toUpperCase();
    let noSpaceKey = upperKey.replace(/\s/g, '');

    let upperMessage = message.toUpperCase();
    let noSpaceMessage = upperMessage.trim();

    let kLength = noSpaceKey.length;
    let mLength = noSpaceMessage.length;

    let result = [];

    for (let i = 0, n = 0; i < mLength; i+=1, n+=1){
      let messageChar = noSpaceMessage[i];

      let rowIndex = noSpaceKey.charCodeAt(n % kLength) - charcodeStart;
      let row = table[rowIndex];

      if (!~abc.indexOf(messageChar)){
        result.push(messageChar);
        n--;
        continue;
      }

      let targetIndex = row.indexOf(messageChar);
      let originalRow = table[0];
      let trueChar = originalRow[targetIndex];

      result.push(trueChar);
    }
    if (this._ReverseFlag === true) return result.reverse().join('');
    return result.join('');
  }
}


module.exports = VigenereCipheringMachine;
