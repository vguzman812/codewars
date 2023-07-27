// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  let sn = num.toString();
  let expanded = [];
  for (let i = 0; i < sn.length; i++){
    let currentMultiplier = 10 ** (sn.length - (i + 1));
    let currentNum = sn[i] * currentMultiplier;
    if (currentNum !== 0){
      expanded.push(currentNum);
    }
  }
  return expanded.join(" + ")
}

// find length of num.toString()
// find power with 10** length-1
// iterate over string. first string number is 7. total power is 10,000. take power * first string number put that in new array.
// second number is 0. total power is now 10 ** length - 2 or 1,000. take power * second string number. if that is 0, skip.
// third number is 3. total power is now 10 ** length -3 or 100. take power * third string number. if that is 0, skip, otherwise add to array