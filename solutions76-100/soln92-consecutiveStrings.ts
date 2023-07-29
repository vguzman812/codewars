/**
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/typescript
 * @description
 * You are given an array(list) strarr of strings and an integer k. 
 * Your task is to return the first longest string 
 * consisting of k consecutive strings taken in the array.
 * 
 * @param {string[]} strarr
 * @param {number} k
 * @returns {string}
 * 
 * @example
 * Input: ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2
 * Output: folingtrashy
 * Explanation: 
 * Concatenate the consecutive strings of strarr by 2, we get:
 * treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
 * folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
 * trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
 * blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
 * abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
 * Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
 * The first that came is "folingtrashy" so 
 * longest_consec(strarr, 2) should return "folingtrashy".
 * 
 * @pseudocode
 *
 *  initialize empty concact string

 *  iterate through string array
 *      hold current element
 *      check if stringarr[i+k] exists. if true
 *          add k next elements to current element
 *          compare concat string to current string to find max
 *          continue
 *  return concact string
 * 
 */

export function longestConsec(strarr: string[], k: number): string {
    // Check for edge cases
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return "";
    }

    let result = "";

    // Iterate through the string array
    for (let i = 0; i <= strarr.length - k; i++) {
        let cString = strarr[i];

        // Concatenate k-1 more elements to the current string
        for (let j = 1; j < k; j++) {
            cString += strarr[i + j];
        }

        // Compare the length of the current concatenated string to the result
        if (cString.length > result.length) {
            result = cString;
        }
    }

    return result;
}
