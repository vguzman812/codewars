/**
 * https://www.codewars.com/kata/5663f5305102699bad000056/train/typescript
 * @description
 * You are given two arrays a1 and a2 of strings.
 * Each string is composed with letters from a to z.
 * Let x be any string in the first array
 * Let y be any string in the second array.
 * find the maximum number of the absolute difference of the two strings.
 * Find max(abs(length(x) − length(y)))
 * If a1 and/or a2 are empty
 *      return -1 in each
 *
 * @example
 * a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
 * a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
 * mxdiflg(a1, a2) --> 13
 *
 * @param {string[]} a1
 * @param {string[]} a2
 * @returns {number}
 *
 * @pseudocode
 * check if arrays are empty and return appropriately
 * return Math.max(Math.abs(a1.length - a2.length)
 */

export const mxdiflg = (a1: string[], a2: string[]): number => {
	if (a1.length === 0 || a2.length === 0) return -1;

	let maxX: number = 0;
	let minX: number = Infinity;
	for (let sub of a1) {
		maxX = Math.max(sub.length, maxX);
		minX = Math.min(sub.length, minX);
	}

	let maxY: number = 0;
	let minY: number = Infinity;
	for (let sub of a2) {
		maxY = Math.max(sub.length, maxY);
		minY = Math.min(sub.length, minY);
	}
	let maxDif = Math.max(
        Math.abs(maxX - minY), 
        Math.abs(maxY - minX)
    );
    return maxDif
};
