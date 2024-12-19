// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 1;
const endOfRange = 100;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let noOfFactors = 0;

for (let candidate = startOfRange; candidate <= endOfRange; candidate++) {
  noOfFactors = 0;

  for (let factor = 1; factor < candidate; factor++) {
    if (candidate % factor === 0) {
      noOfFactors = noOfFactors + 1;
    }
  }

  if (noOfFactors === 1) {
    console.log(candidate);
  }
}

/*---------------- Another Method --------------------
let pointer = startOfRange;
let potentialFactor = 1;

while (pointer <= endOfRange) {
  potentialFactor++;

  if (pointer < 2) {
    pointer++;
  }

  if (pointer % potentialFactor === 0) {
    if (pointer === potentialFactor) {
      console.log(pointer);
    }

    potentialFactor = 1;
    pointer++;
  }
}
----------------------------------------------------*/