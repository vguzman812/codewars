// Complete the solution so that it reverses the string passed into it.

function solution(str){
    let array = str.split("");
    let reversed = array.reverse();
    let result = reversed.join("");
    return result;
}