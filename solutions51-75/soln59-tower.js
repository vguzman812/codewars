// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:
// [
//     "  *  ",
//     " *** ", 
//     "*****"
//   ]
//   And a tower with 6 floors looks like this:


//   [
//     "     *     ", 
//     "    ***    ", 
//     "   *****   ", 
//     "  *******  ", 
//     " ********* ", 
//     "***********"
//   ]

function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
      let numAsterisks = i * 2 + 1;
      let numSpaces = nFloors - i - 1;
      let floor = `${' '.repeat(numSpaces)}${'*'.repeat(numAsterisks)}${' '.repeat(numSpaces)}`;
      tower.push(floor);
    }
    return tower;
  }

//   function towerBuilder(n) {
//     var bricks = '*';
//     var spaces = ' '.repeat(n - 1);
//     var tower = [];
  
//     for (var i = 0; i < n; i++) {
//       var space = spaces.slice(0, n - i - 1);
//       tower.push(space + bricks + space);
//       bricks += '**';
//     }
  
//     return tower;
//   }

return tower;
  // count from bottom up floor 0
  // spaces per side = floor#
  // asterisks per floor = nFloors - floor#
  // space * spaces per side + asterisks + spacesperside *space