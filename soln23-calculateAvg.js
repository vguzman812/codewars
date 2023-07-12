// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

let findAverage = (array) => array.length == 0 ? 0 : (array.reduce((a, c) => a + c) / array.length)
// No initial value needed due to empty array check in beginning.