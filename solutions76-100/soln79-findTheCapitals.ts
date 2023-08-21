/**
 *
 * @param {string} word
 * @return {number[]}
 * @description Given a single string, return an ordered list containing the indexes of all capital letters in the string.
 * @example
 * Input: "CodEWaRs"
 * Output: [0,3,4,6]
 */
    export function capitals(word: string): number[] {
        return word.split("").map((element, index) => {
            return element.toUpperCase() === element ? index : -1;
        }).filter(index => index !== -1);
    }