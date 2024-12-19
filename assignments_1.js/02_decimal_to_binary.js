// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 10;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let newDividend = a;
let remainder = 0;

if (newDividend === 0) {
  console.log(a);
}

while (0 < newDividend) {
  const secondDigit = newDividend % 2;
  console.log(secondDigit);
  newDividend = newDividend - secondDigit;
  newDividend = newDividend / 2;
}