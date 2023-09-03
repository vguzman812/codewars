/**
 * https://www.codewars.com/kata/550498447451fbbd7600041c/typescript
 * @description
 * Given two arrays a and b
 * write a function comp(a, b) or compSame(a, b)
 * that checks whether the two arrays have the "same" elements,
 * with the same multiplicities
 * (the multiplicity of a member is the number of times it appears).
 * "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 *
 * @param {number[] | number{}} a
 * @param {number[] | number{}} b
 * @returns {boolean}
 * If a or b are nil, the problem doesn't make sense so return false.
 *
 * @example
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * returns true because in b
 * 121 is the square of 11,
 * 14641 is the square of 121,
 * 20736 the square of 144,
 * 361 the square of 19,
 * 25921 the square of 161,
 * and so on.
 * It gets obvious if we write b's elements in terms of squares:
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
 *
 * @pseudocode
 *  check for null
 *  check for same length. If a.length !== b.length return false
 *  square all numbers in a and store in map
 *  iterate through b.
 * `    if squareMap does not have b element
 *          return false
 *      else if squareMap has b element
 *          remove b element from squareMap
 *  return true
 * 
 * @time O(n)
 * @space O(n)
 */

export function comp(a1: number[] | null, a2: number[] | null): boolean {
    if (!a1 || !a2) return false;
    if (a1.length !== a2.length) return false;

    let squareMap = new Map<number, number>();
    
    for (let num of a1) {
        squareMap.set(num ** 2, (squareMap.get(num ** 2) || 0) + 1);
    }

    for (let num of a2) {
        if (squareMap.has(num)) {
            let count = squareMap.get(num)!;
            if (count === 1) {
                squareMap.delete(num);
            } else {
                squareMap.set(num, count - 1);
            }
        } else {
            return false;
        }
    }
    
    return true;
}
