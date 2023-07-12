// Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
    // Code here
    if (str.length == 0){
      return "";
    }
    let uppercase = []
    for(let i=0, l=str.length; i<l; i++){
      let charCode = str.charCodeAt(i)
       if (charCode >= 97 && charCode <= 122) {
        uppercase.push(String.fromCharCode(charCode - 32))      
      }else{
        uppercase.push(str[i]);
      }
    }
    return uppercase.join("")
  }