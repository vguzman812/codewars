/*Given a non-negative integer, 3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.*/

 countSheep = n => [...Array(n)].map((_, index) => `${index + 1} sheep...`).join('');

// Or
/*
var countSheep = function (num){
    //your code here
    let sheep = []
    for(let i=1; i<=num; i++){
      sheep.push(`${i} sheep...`)
    }
    return sheep.join('')
  }
*/