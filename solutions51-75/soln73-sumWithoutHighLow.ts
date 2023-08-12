// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

export function sumArray(array:number[] | null) : number {
    if (array == null || array.length  <= 1) return 0;
    else{
        let highest = Math.max(...array);
        let lowest = Math.min(...array);
        return array.reduce((a, c) =>{
            return a + c;
        }, 0) - highest - lowest;
    }
  }

  // if current item is the highest then set it to highest
  // else if 