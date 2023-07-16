// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
let array = numbers.split(" ")
return `${Math.max(...array)} ${Math.min(...array)}`
}
