/**
 * https://www.codewars.com/kata/515f51d438015969f7000013/train/typescript
 * @description
 * Write a function that when given a number >= 0 
 * returns an Array of ascending length subarrays.
 * subarrays should be filled with 1
 * 
 * @param {number} n
 * @returns {number[][]}
 * @example
 * input: 0
 * output: []
 * 
 * input: 1
 * output: [ [1] ]
 * 
 * input: 3
 * output: [ [1], [1, 1], [1, 1, 1] ]
 * 
 * @pseudocode
 * create Array of length n Array(n)
 * fill array with values or null
 * map over each value
 * new value of that element should be another array of length i+1
 * fill subarray with 1 values
 * return map function
 * 
 * 
 */

export function pyramid(n: number) {
    return Array.from({length: n}, (_, i) => Array(i + 1).fill(1) )
  }