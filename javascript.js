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
  module.exports = {capitalize, reverseString};