// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 2;
// Print the square root of a
// Printing more than one output or printing anything other than square root might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let sqrt = 1;
let decimal = 1;

while ((sqrt * sqrt) <= a) {
  sqrt = sqrt + 1;
}

sqrt = sqrt - 1;
console.log(sqrt);
