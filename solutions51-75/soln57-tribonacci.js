
//     So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
//     [1, 1 ,1, 3, 5, 9, 17, 31, ...]
//     But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

//     [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
//     Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
//     Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
function tribonacci(signature,n){
    let sequence = [];
    for (let i = 0; i < n; i++){
        if (i < signature.length){
            sequence[i] = signature[i];
        }
        else{
            sequence[i] = sequence[i-1] + sequence[i - 2] + sequence[i -3]
        }
    }
    return sequence
  }

//   function tribonacci(signature,n) {
//     const result = signature.slice(0, n);
//     while (result.length < n) {
//       result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
//     }
//     return result;
//   }


  // create array to hold final sequence
  // iterate n number of times to add n elemennts to final sequence
  // if first iteration, add signature to sequence
  // if i < signature.length, sequence[i] = signature[i]
  // else sequence[i] = sequence[i] + sequence [i-1] + sequence[i-2]
