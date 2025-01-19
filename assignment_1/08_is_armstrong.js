// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 153;
// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let noOfDigits = 0;
let secondDigit = 0;
let candidate = a;
let sum = 0;

while (1 < candidate) {
  candidate = candidate / 10;
  noOfDigits = noOfDigits + 1;
}

candidate = a;

while (0 < candidate) {
  secondDigit = candidate % 10;
  sum = sum + (secondDigit ** noOfDigits);
  candidate = (candidate - secondDigit) / 10;
}

console.log(sum === a);