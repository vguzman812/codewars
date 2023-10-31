/**
 * @description
 * given string
 * return string
 * if char only appears once, change that char to "("
 * if char appears more than onece, change that char to ")"
 *
 * @param {string}str
 * @returns {string}
 *
 * @pseudocode
 * iterate through the string once.
 * have a map of number of times that character is in the string
 * intiialize a new placeholder string
 * iterate through the original stirng again.
 * if current iteration has a value > 1 in the map,
 * then concat the appropriate )( onto the placeholder string
 */


function stringToParen(arg: string): string {
  let answer = new Array(arg.length);
  let map = new Map();
  for (let i = 0; i < arg.length; i++) {
    const currentChar = arg[i].toLowerCase();
    map.set(currentChar, (map.get(currentChar) ?? 0) + 1);
  }
  for (let i = 0; i < arg.length; i++) {
    const currentChar = arg[i].toLowerCase();
	const moreThanOne = map.get(currentChar) > 1
	moreThanOne ? answer[i] = ")" : answer[i] = "("
  }
  return answer.join("");
}

console.log(stringToParen("din"), "(((")
console.log(stringToParen("recede"), "()()()")
console.log(stringToParen("Success"), ")())())")
console.log(stringToParen("(( @"), "))((")
