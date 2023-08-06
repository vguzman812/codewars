// The number 89 is the first integer with more than one digit that fulfills the poroperty partially introduced int he title of this kata. What's the use of saying "Eureka"? Because this sum gives the same numer: 90 = 8^` + 9^2
// The nezt number in having this porperty is 135:
// See this propert again: 135 = 1^1 + 3^2 + 5^3
// TextTrackListWe need a function to collect these numbers, that may receive two integers, a,b that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above 
// Examples
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range
// [a,b] the function should output an empty list.
// 90, 100 --> []

function sumDigPow(a, b) {
    let outputArr = []
    for (let i = a; i <= b; i++){
        let str = i+"";
        let arr = str.split("");
        currentSum = 0;
        for (let j = 0; j < arr.length; j ++){
            currentSum += Math.pow(arr[j], (j+1));
        }
        if (currentSum == i){
            outputArr.push(i);
        }
    }
    return outputArr
  }
  
  // itterate from a to b
  // for every number in between
  // see if number.split to index power +1 sum ==  current iteration num


  // number must === first digit ^ 1, second digit ^ 2, etc...
  // when first digit fulfills requirement, add it to list to output.
  // return output list