// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let previousTerm = 0;
let currentTerm = 1;
let nextTerm = 0;

for (let previousTermPosition = 1; previousTermPosition !== n;previousTermPosition++) {
    nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;    
}

console.log(previousTerm);