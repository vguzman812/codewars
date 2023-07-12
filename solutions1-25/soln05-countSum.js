// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (!input || !input.length) return [];
    let sum = input.reduce(function(accumulator, currentValue){
      if (currentValue > 0){
        accumulator[0] += 1;
      }
      else if (currentValue < 0){
        accumulator[1] += currentValue;
      }
      return accumulator
    }, [0, 0])
    return sum;
  }