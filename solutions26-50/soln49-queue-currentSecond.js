// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

function queueTime(customers, n) {
    if (customers.length === 0){
        return 0;
    }
    if (n === 1){
        return customers.reduce((a,c) => a+c, 0);
    }
    let tills = Array(n).fill(0);
    for (customerTime of customers){
        let minTill = tills.indexOf(Math.min(...tills));
        tills[minTill] += customerTime;
    }
    return Math.max(...tills)
}
// FUNCTION queueTime(customers, n):
//     IF customers IS EMPTY:
//         RETURN 0

//     IF n == 1:
//         RETURN SUM(customers)

//     CREATE tills AS AN ARRAY OF SIZE n AND INITIALIZE ALL ELEMENTS TO 0

//     FOR EACH customer IN customers:
//         FIND THE TILL WITH THE MINIMUM TOTAL TIME (MIN_TILL)
//         ADD THE CUSTOMER TIME TO MIN_TILL
//         MOVE TO THE NEXT CUSTOMER

//     RETURN MAXIMUM TIME AMONG ALL TILLS
// END FUNCTION