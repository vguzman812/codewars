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
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 * 
 * @example
 * a = [121, 144, 19, 161, 19, 144, 19, 11]  
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * returns true
 * 
 */