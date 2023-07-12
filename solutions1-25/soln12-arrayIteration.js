// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). sheep = [true, true, false, true], answer = 3

function countSheeps(arrayOfSheep) {
    let sum = 0;
    if (arrayOfSheep.length == 0){
        return sum;
    }
    for (let sheep of arrayOfSheep){
        if (sheep === true){
            sum ++;
        }
    }
    return sum;
  }
