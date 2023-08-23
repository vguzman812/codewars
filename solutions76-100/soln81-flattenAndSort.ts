/**
 * PREP
 * https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/typescript
 * @description
 * Given a two-dimensional array of integers,
 * return the flattened version of the array with all the integers in the sorted (ascending) order.
 * one dimensional emptyy arrays must return a one dimensional empty array
 * two dimensional empty input should return one dimensional array output
 * @param {number[][]} inputArray
 * @returns {number[]}
 * @example
 * Input: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * 
 * Input: []
 * Output: []
 * 
 * Input: [[], []]
 * Output: []
 * @pseudoCode
 
function flattenAndSort(twoDimensionalArray):
  reduce inputArray while we concatenate current item onto an initial empty array
    reduce((a,c) => acc.concat(c), [])
  sort ascending order
  return inputArray

 * 
 */
export function flattenAndSort(inputArray: number[][]): number[] {
	return inputArray
		.reduce((acc, itm) => acc.concat(itm), [])
		.sort((a, b) => a - b);
}
