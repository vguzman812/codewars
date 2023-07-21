// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    const alphabet = {};
    let numText = "";
    let letter = "a";
    for (let i = 1; i <= 26; i++) {
      alphabet[letter] = i;
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    for (char of text.toLowerCase()) { // Convert the characters to lowercase
      if (char in alphabet) {
        numText += `${alphabet[char]} `;
      }
    }
    return numText.trim(); // Remove the trailing space before returning
  }