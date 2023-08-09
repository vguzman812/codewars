// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

export function sumMix(x: any[]): number {
    return x.reduce((acc, cur) =>{
        return Number(acc) + Number(cur);
    }, 0)
}