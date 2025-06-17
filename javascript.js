function capitalize(str) {
    let firstLetter = str.charAt(0).toUpperCase();
    return firstLetter + str.slice(1);
  }

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}

const calculator = {
    add: function (a, b) {
        return a+b;
    },

    subtract: function (a, b) {
        return a-b;
    },

    multiply: function (a, b) {
        return a*b;
    },

    divide: function (a, b) {
        return a/b;
    }
}


function caesarCipher(str, shiftFactor) {
    //quick google search... ASCII 97-122 = a-b. 65-90 = A-Z
    let currentChar = "";
    let charCode = 0;
    let encodedStr = "";
    for (let i = 0; i < str.length; i++) {
        currentChar = str[i];
        charCode = currentChar.charCodeAt(0);

        if (charCode >=97 && charCode <= 122) { //lowercase
            let shiftedCode = ((charCode - 97 + shiftFactor) %26) + 97;
            encodedStr += String.fromCharCode(shiftedCode);

        } else if (charCode >= 65 && charCode <= 90) {
            let shiftedCode = ((charCode - 65 + shiftFactor) %26) + 65;
            encodedStr += String.fromCharCode(shiftedCode);
        } else {
            encodedStr += String.fromCharCode(charCode);
        }
        
    }
    return encodedStr;
}
  module.exports = {capitalize, reverseString, calculator, caesarCipher};