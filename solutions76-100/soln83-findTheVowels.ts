/**
 * https://www.codewars.com/kata/5680781b6b7c2be860000036/train/typescript
 *
 * @description
 * We want to know the index of the vowels in a given word,
 * for example, there are two vowels in the word super (the second and fourth letters).
 * So given a string "super", we should return a list of [2, 4].
 *
 * @example
 * Mmmm  => []
 * Super => [2,4]
 * Apple => [1,5]
 * YoMama -> [1,2,4,6]
 *
 * @param {string} word
 * @returns {number[]}
 *
 * @pseudocode
 *  initialize list of vowels.
 *  initialize array to hold indices of vowels
 *  iterate through word
 *      if current letter is a vowel
 *          add index to vowel index array
 *  return array
 */

export function vowelIndices(word: string): number[] {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    return word
    .split("")
    .flatMap((letter, i) => vowels.has(letter.toLowerCase()) ? [i] : []);
}

