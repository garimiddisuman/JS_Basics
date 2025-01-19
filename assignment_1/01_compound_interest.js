// Do not rename p, r or t, use them as input for your program.
// While testing we will change their values.
const p = 0;
const r = 5;
const t = 2;
// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let compoundInterest = 0;
let newPrinciple = p;

for (let currentYear = 0; currentYear < t; currentYear++) {
  compoundInterest += (newPrinciple * r) / 100;
  newPrinciple = compoundInterest + p;
}

console.log(compoundInterest);