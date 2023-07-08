// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash (words) {
    let result = "";
    if(words.length === 0){
      return result;
    }
    for (let word of words){
      if(words.indexOf(word) === (words.length - 1)){
         result += word;
      }
      else result += `${word} `;
    }
    return result;
  }