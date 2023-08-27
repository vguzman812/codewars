/**
 * https://www.codewars.com/kata/57ed30dde7728215300005fa/train/typescript
 * @description
 * Your car is old, it breaks easily. The shock absorbers are gone and you think 
 * it can handle about 15 more bumps before it dies totally.
 * Unfortunately for you, your drive is very bumpy! 
 * Given a string showing either flat road (_) or bumps (n). 
 * If you are able to reach home safely by encountering 15 bumps or less, 
 * return Woohoo!, 
 * otherwise return Car Dead
 * 
 * @param {string} x
 * @returns {string}
 * 
 * @example
 * Input: "______n___n_"), "Woohoo!"
 * Output: "Woohoo!"
 * 
 * Input: "_nnnnnnn_n__n______nn__nn_nnn"
 * OUTPUT: "Car Dead"
 * 
 * @pseudoCode
 *  initialize bump sum
 *  iterate through input string
 *      every time you encounter n, increment sum
 *  check if bump sum >= 15
 *      if so return "Car Dead"
 *  return "Woohoo!"
 * 
 */

export function bump(x: string): string{
    let sum: number = 0;
    for (let piece of x){
        if (piece === "n") sum++ 
    }
    return sum >= 15 ? "Car Dead" : "Woohoo!"
  }