/**
 * https://www.codewars.com/kata/523f5d21c841566fde000009/train/typescript
 * @description
 * Your goal in this kata is to implement a difference function,
 * which subtracts one list from another and returns the result.
 * It should remove all values from list a,
 * which are present in list b keeping their order.
 * If a value is present in b, all of its occurrences must be removed from the other:
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 *
 * @example
 * Input: [], [4, 5]
 * Output: []
 *
 * Input: [3, 4], [3]
 * Output: [4]
 *
 * Input: [1, 8, 2], []
 * Output: [1,8,2]
 *
 * Input: [1, 2, 3], [1, 2]
 * Output: [3]
 *
 * @pseudocode
 *  initialize empty array result
 *  iterate through array a
 *      if current value not in array b
 *          push current value to result
 *  return result
 *  culd make it On time and On space if we make maps of the arrays
 *
 * @time O(n^2)
 * @space O(1)
 */

export function arrayDiff(a: number[], b: number[]): number[] {
	let result: number[] = [];
	for (let i = 0; i < a.length; i++) {
        let current = a[i]
        if (!b.includes(current)) result.push(current)
    }
    return result
}
