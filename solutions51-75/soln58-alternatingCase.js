// each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.
String.prototype.toAlternatingCase = function () {
    let newString = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i] >= 'a' && this[i] <= 'z') {
        newString += this[i].toUpperCase();
      } else if (this[i] >= 'A' && this[i] <= 'Z') {
        newString += this[i].toLowerCase();
      } else {
        newString += this[i]; // Append characters that are not letters as they are.
      }
    }
    return newString;
  };

  // this.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("")