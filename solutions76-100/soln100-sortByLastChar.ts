/**
 * @description
 * given string of words x
 * return array of the words sorted alphabetically by last character of that word
 * if two word have the same last character, sort them by their order in the original string
 * all inputs will be valid
 *
 * @param {string} x
 * @returns {string[]}
 *
 */

function sortByLastChar(x: string): string[] {
	// split words by space
  const words = x.split(" ");
  // create array of objects, with original word, last char, and original index
  const wordsWithLastChar = words.map((word, index) => ({
    word,
    lastChar: word[word.length - 1],
    originalIndex: index, // to maintain original order in case of a tie
  }));
  // sort the array of objects
  wordsWithLastChar.sort((a, b) => {
	// if last chars are same sort by their order in the original string
    if (a.lastChar === b.lastChar) {
      return a.originalIndex - b.originalIndex;
    }
	// else sort them by their last char
    return a.lastChar.localeCompare(b.lastChar);
  });
  // return array of sorted words
  return wordsWithLastChar.map((entry) => entry.word);
}

let test1 = sortByLastChar("man i need a taxi up to ubud");
let answer1 = ["a", "need", "ubud", "i", "taxi", "man", "to", "up"];
console.log(test1, answer1);
console.log(sortByLastChar("what time are we climbing up the volcano"), [
  "time",
  "are",
  "we",
  "the",
  "climbing",
  "volcano",
  "up",
  "what",
]);
console.log(sortByLastChar("take me to semynak"), [
  "take",
  "me",
  "semynak",
  "to",
]);
