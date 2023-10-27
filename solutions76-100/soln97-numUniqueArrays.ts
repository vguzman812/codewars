/**
 * @description
 * given an array filled with arrays filled with numbers
 * find the number of unique array
 * that can be formed by picking one element from each subarray
 * Don't count duplicates
 * @param {number[][]} nestedArray
 * @returns {number} numUniqueArrays
 * @pseudocode
 * iterate through outer array
 * for current array, make a new set.
 * could make a set that has num unique eleemnts in each subarray.
 * then you cpould iterate through set function because it is ordered.
 * have numuniquearrays.
 * numUniqueArrays *= value of the current num unique element iteration
 * return num unique arrays
 *
 */

function solve(nestedArray: number[][]): number {
  let numUniqueArrays = 1;
  for (let i = 0; i < nestedArray.length; i++) {
    let currentSubArray = nestedArray[i];
    let currentSet = new Set(currentSubArray);
	numUniqueArrays *= currentSet.size
  }
  return numUniqueArrays;
}

console.log(
  solve([
    [1, 2],
    [3, 4],
  ]),
  4
);
console.log(solve([[1, 2], [4], [5, 6]]), 4);
console.log(
  solve([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ]),
  4
);
console.log(
  solve([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
  8
);
console.log(
  solve([
    [1, 2, 3],
    [3, 4, 6, 6, 7],
    [8, 9, 10, 12, 5, 6],
  ]),
  72
);
