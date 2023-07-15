// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

String.prototype.toJadenCase = function () {
    let array = this.split(' ');
    let upper = array.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    return upper.join(" ")
};