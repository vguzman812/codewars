// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function sortArray(array) {
    // create array with sorted odds
    let sortedOdds = array.filter(num => num % 2 !== 0).sort((a, b) => a-b);
    // use that array to replace odd numbers in original array with correctly sorted odds
    let sortedOddsIndex = 0;
    for (let i = 0; i< array.length){
        if (array[i] % 2 !== 0){
            array[i] = sortedOdds[sortedOddsIndex];
            sortedOddsIndex++;
        }
    }
  }

