// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
function findOdd(A) {
    let counts = A.reduce((obj, num) => {
        obj[num] = (obj[num] || 0) + 1;
        return obj;
    }, {});

    let result;
    for (let count in counts) {
        if (counts[count] % 2 !== 0) {
            result = count;
            break; // Optional, to improve performance if you expect only one odd count.
        }
    }

    return Number(result); // Convert result back to a number.
}