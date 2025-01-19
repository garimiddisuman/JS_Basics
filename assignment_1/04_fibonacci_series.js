// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let previousTerm = 0;
let currentTerm = 1;
let nextTerm = 0;

for (let term = 1; term <= n; term++) {
  console.log(previousTerm);

  nextTerm = previousTerm + currentTerm;
  previousTerm = currentTerm;
  currentTerm = nextTerm;
}
