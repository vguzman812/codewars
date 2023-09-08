/**
 * https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/typescript
 * @description
 * Complete the function so that it finds the average of the three scores passed to it 
 * and returns the letter value associated with that grade.
 * 
 * Numerical Score	Letter Grade
 * 90 <= score <= 100	'A'
 * 80 <= score < 90	'B'
 * 70 <= score < 80	'C'
 * 60 <= score < 70	'D'
 * 0 <= score < 60	'F'
 * 
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {string} "A" | "B" | "C" | "D" | "F"
 * 
 * @example
 * Input: 95, 90, 93
 * Output: A
 * 
 * Input: 60, 82, 76
 * Output: C
 * 
 * @pseudocode
 *  init sum var
 *  add each arg to sum
 *  avg = sum / 3
 *  conditionals
 * 
 */

export function getGrade(a: number, b: number, c: number): string {
  let avg = (a+b+c) / 3
    if (avg >= 90) {
        return "A"
    }
    if (avg >= 80) {
        return "B"
    }
    if (avg >= 70) {
        return "C"
    }
    if (avg >= 60) {
        return "D"
    }
    if (avg < 60) {
        return "F"
    }
    throw new Error("Something went wrong")
}