// Do not rename year, use it as input for your program.
// year will be a natural number.
// While testing we will change its value.
const year = 2024;
// Print true if the year is a leap year otherwise print false.
// Printing more than one output or printing anything other than leap year or not leap year might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE



// if ( year % 100 !== 0 ) {
//     console.log( year % 4 === 0 );    
// } else {
//     console.log( year % 400 === 0 );   
// }



// modified code.....
const isDivisibleBy400 = year % 400 === 0;
const isDivisibleBy100 = year % 100 === 0;
const isDivisibleBy4 = year % 4 === 0;

const isPrime = isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100);

console.log(isPrime);





