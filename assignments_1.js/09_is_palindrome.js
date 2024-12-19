// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 121;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let candidate = a;
let remainder = 0;
let reversedA = 0;

while (0 < candidate) {
  secondDigit = candidate % 10;
  reversedA = (reversedA * 10) + secondDigit;
  candidate = (candidate - secondDigit) / 10;
}

console.log(a === reversedA);
