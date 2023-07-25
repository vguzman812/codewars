// // Complete the solution so that the function will break up camel casing, using a space between words.
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    const strArr = string.split('');
    for (let i = strArr.length - 1; i > 0; i--) {
        // if letter is uppercase
        if (strArr[i].charCodeAt(0) >= 65 && strArr[i].charCodeAt(0) <= 90) {
            strArr.splice(i, 0, " ");
        }
    }
    return strArr.join("");
}
