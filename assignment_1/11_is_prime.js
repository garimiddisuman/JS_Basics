// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 5;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let noOfFactors = 0;

for (let potentialFactor = 1; potentialFactor <= a / 2; potentialFactor++) {
  if (a % potentialFactor === 0) {
    noOfFactors = noOfFactors + 1;
  }
}

console.log(noOfFactors === 1);
