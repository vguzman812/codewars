/**
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript
 * @description
 * Move the first letter of each word to the end of it,
 * then add "ay" to the end of the word.
 * Leave punctuation marks untouched.
 *
 * @param {string} a
 * @returns {string}
 *
 * @example
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 * 
 * 
 * @pseudocode
 *  split string on spaces
 *  for each word
 *      slice off first letter
 *      stick first letter to the end
 *      add "ay" to end
 *  join array back together again
 * 
 * TODO: check for punctuation
*/

const pigIt = (a: string): string => {
    let words = a.split(" ");
    // Regex for detecting any character that is not a word character
    const punctuation = new RegExp(/[^\w]/);
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (punctuation.test(word) || word==="") continue;
  
      let firstLetter = word[0];
      let restOfWord = word.slice(1);
      let newWord = `${restOfWord}${firstLetter}ay`;
  
      words[i] = newWord;
    }
  
    return words.join(" ");
  };
  
  console.log(pigIt('Pig latin is cool'));  // Output: igPay atinlay siay oolcay
  console.log(pigIt('Hello world !'));      // Output: elloHay orldway !
  