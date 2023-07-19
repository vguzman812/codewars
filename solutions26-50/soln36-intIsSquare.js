// // Given an integral number, determine if it's a square number:

// // In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0 ? true : false;
  }