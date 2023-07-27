// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(str){
    const baseCharCode = 'a'.charCodeAt(0) - 1;
    let words = str.split(" ");
    let highestWord = {
        score: 0,
        index: 0,
    }
    for (let i = 0; i < words.length; i++){
        let currentWordScore = 0;
        for (letter of words[i]){
            let lowerCaseLetter = letter.toLowerCase();
            currentWordScore += (lowerCaseLetter.charCodeAt(0) - baseCharCode);
        }
        if (currentWordScore > highestWord.score){
            highestWord.score = currentWordScore;
            highestWord.index = i
        }
    }
    return words[highestWord.index]

}