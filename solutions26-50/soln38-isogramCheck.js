// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let currentLetters = [];
    for (let char of str){
        if (currentLetters.includes(char.toLowerCase())){
            currentLetters.push(char.toLowercase())
            return false;
        }
    }
    return true;
}

// return new Set(str.toUpperCase()).size == str.length;