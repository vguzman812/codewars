// export function smallEnough(a: number[], limit: number): boolean{
/**
 * PREP
 * @param {number[]} a
 * @param {number} limit
 * @returns {boolean}
 * @example
 * Input: [66, 101], 200
 * Output: true
 *
 * Input: [1, 3, 1, 1, 1, 2], 1
 * Output: false
 *
 * @description
 * You will be given an array and a limit value.
 * You must check that all values in the array are below or equal to the limit value.
 * If they are, return true.
 * Else, return false.
 * You can assume all values in the array are numbers.
 *
 * @pseudocode
 *  iterate through given array
 *      check if current value is > limit
 *          if current value is > limit then return false
 *  return true
 *
 */
export function smallEnough(a: number[], limit: number): boolean {
	for (let i = 0; i < a.length; i++) {
		if (a[i] > limit) return false;
	}
	return true;
}
