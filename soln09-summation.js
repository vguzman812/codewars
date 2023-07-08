// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
    let sum = 0;
    for (let i=1; i<=num; i++){
        sum += i;
    }
    return sum;
  }

/*  
    sum = n/2 * (a + l) // n == 4
    n == number of terms // 4
    a = first term // 1
    l = last term // 4 or n
*/ 
// const summation = (num) => n * (n + 1) / 2
