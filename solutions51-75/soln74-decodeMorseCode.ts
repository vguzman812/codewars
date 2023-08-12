// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/typescript,
import { MORSE_CODE } from './preloaded';
export function decodeMorse(morseCode: string): string {
    return morseCode.trim()
        .split('   ') // Split into words
        .map(word => word.split(' ') // Split each word into characters
            .map(character => MORSE_CODE[character] || '') // Decode each character
            .join('')) // Join characters into a word
        .join(' '); // Join words into a sentence
}

//most morse code i get will be 3 char long. 
// split up the given string into an array based on two criteria
// needs to be split by 3 spaces initially
// after split by three spaces, each element in the array now contains a single word.
// now we split those array elements into smaller arrays by one space
/* 
so our final array looks like [
    ['-.-', '---', '...' etc...],
    [etc...],
    [etc...],
    etc...
]
*/
// now we iterate through array and for each item in main array 
//we go inside and iterate through the secondary array, changing the value of the item
// to whatever we get back from MORSE_CODE[x]
// then we join the items in the array to form a word.
