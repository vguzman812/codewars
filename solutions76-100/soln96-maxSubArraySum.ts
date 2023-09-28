/**
 * https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
 * @description
 * The maximum sum subarray problem consists in finding the maximum sum
 * of a contiguous subsequence in an array or list of integers:
 * maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 * // should be 6: [4, -1, 2, 1]
 * Easy case is when the list is made up of only positive numbers
 * and the maximum sum is the sum of the whole array.
 * If the list is made up of only negative numbers, return 0 instead.
 * Empty list is considered to have zero greatest sum.
 * Note that the empty list or array is also a valid sublist/subarray.
 *
 * @example
 * input: []
 * output: 0 emprty returns 0
 *
 * input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * output: 6: [4, -1, 2, 1]
 *
 * input: [-1, -2, -3, -4]
 * output: 0 all negative returns 0
 *
 * @param {number[]} arr
 * @returns {number}
 *
 * @pseudocode
 * 	Function maxSequence(arr: Array of Integer) -> Integer
 * 	    Initialize max_sum to 0
 * 	    Initialize current_sum to 0
 * 	    For each number "n" in arr
 * 	        current_sum = current_sum + n
 * 	        if current_sum < 0 then
 * 	            current_sum = 0
 * 	        end if
 * 	        if current_sum > max_sum then
 * 	            max_sum = current_sum
 * 	        end if
 * 	    End For
 * 	    Return max_sum
 * 	End Function
 *
 */

function maxSequence(arr: number[]): number {
	let maxSum = 0;
	let currentSum = 0;
	arr.forEach((num) => {
		currentSum += num;
		if (currentSum < 0) currentSum = 0;
		if (currentSum > maxSum) maxSum = currentSum;
	});
	return maxSum;
}
