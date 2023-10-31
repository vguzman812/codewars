/**
 * https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript
 * @description
 * given string
 * determine if string has all letters of alphabet, a-z
 * return boolean
 * true if has all letters
 * else false
 * @param {string} phrase
 * @returns {boolean}
 *
 * @pseudocode
 * could make a set to get rid of all excess then iterate through set and see if it has a-z
 *
 */

const isPangram = (phrase: string): boolean => {
  let alphabet = new Set([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);
  let count = 0;
  let phraseSet = new Set(phrase.toLowerCase());
  console.log;
  phraseSet.forEach((character) => {
    if (alphabet.has(character)) {
      count++;
    }
  });
  return count === alphabet.size ? true : false;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
console.log(isPangram("This is not a pangram."), false);
console.log(isPangram(""), false);
