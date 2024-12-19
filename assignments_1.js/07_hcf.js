// Do not rename a and b, use them as input for your program.
// a and b will be natural numbers.
// While testing we will change their values.
const a = 9;
const b = 0;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let dividend = a;
let divisor = b;
let hcf = dividend;

while (divisor != 0) {
    let remainder = dividend % divisor;
    dividend = divisor;
    hcf = divisor;
    divisor = remainder;
}

console.log(hcf);