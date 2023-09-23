/**
 * https://www.codewars.com/kata/581e014b55f2c52bb00000f8
 * 
 * @description
 * You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
 * For each word:
 * the second and the last letter is switched (e.g. Hello becomes Holle)
 * the first letter is replaced by its character code (e.g. H becomes 72)
 * Note: there are no special characters used, only letters and spaces
 * 
 * @examples
 * decipherThis('72olle 103doo 100ya'); // 'Hello good day'
 * decipherThis('82yade 115te 103o'); // 'Ready set go'
 * 
 * @param {string} str
 * @returns {string}
 * 
 * @pseudocode
 * do stuff
 * do more stuff
 * 
 */

function isNumber(str) {
    const numbers = '0123456789';
    return numbers.includes(str);
}

function decipherThis(str) {
    return str.split(' ')
              .map(word => {
                let num = word.split('').filter(letter => isNumber(letter)).join('');
                word = word.slice(num.length);
                
                // Switch first and last letter only if word's length is >= 2
                if (word.length >= 2) {
                    word = word.slice(-1) + word.slice(1, -1) + word[0];
                }
                
                // Add the character code back in
                return String.fromCharCode(parseInt(num, 10)) + word;
              })
              .join(' ');
}

console.log(decipherThis('72olle 103doo 100ya'), '->', 'Hello good day');
console.log(decipherThis('82yade 115te 103o'), '->', 'Ready set go');
