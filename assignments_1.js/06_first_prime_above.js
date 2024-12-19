// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 0;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let candidate = a;
let noOfFactors = 0;

while (noOfFactors !== 1) {
  candidate = candidate + 1;
  noOfFactors = 0;

  for (let potentialFact = 1; potentialFact < candidate; potentialFact++) {
    if (candidate % potentialFact === 0) {
      noOfFactors = noOfFactors + 1;
    }
  }
}

console.log(candidate);
