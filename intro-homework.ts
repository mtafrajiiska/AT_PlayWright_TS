// Exercise 1: Check if a number is even or odd
let num: number = 5;
let isEven: boolean = num % 2 === 0;

if (isEven) {
  console.log(`${num} is Even`);
} else {
  console.log(`${num} is Odd`);
}

// Exercise 2: Check if a string has more than 10 characters
let checkString: string = "Hello, TypeScript!";
let isLong: number = checkString.length;
if (isLong>10){
    console.log ("stringValue is > 10");
}else {
    console.log ("stringValue is <= 10");
}

// Exercise 3: Verify if a number is positive
let nummber: number = 5;
let isPositive: boolean = nummber>0;

console.log(isPositive ? `${nummber} is Positive` : `${nummber} is Negative or Zero`);

// Exercise 4: Determine if a number is negative or zero
let numCheck: number = - 5;
let isNonPositive: boolean = nummber<0;

console.log(isNonPositive ? `${numCheck} is Positive` : `${numCheck} is Negative or Zero`);

// Exercise 5: Check if a string is empty
let Message: string = "";
let isEmpty: boolean = Message === "";

console.log(isEmpty ? "The message is empty" : "The message is not empty");


// Exercise 6: Determine if a number is within a range (10 to 100 inclusive)
let rangeNumber: number = 78;
let isInRange: boolean = rangeNumber >=1 && rangeNumber <= 10;
console.log (isInRange ? `${rangeNumber} is between 10 and 100 (inclusive)` : `${rangeNumber} is NOT between 10 and 100 (inclusive)`);


// Exercise 7: Check if a number is either 0 or 100
let specialNumber: number = 200;
let isZeroOrHundred: boolean = specialNumber === 0 || specialNumber === 100;
console.log(isZeroOrHundred ? `${specialNumber} is either 0 or 100` : `${specialNumber} is neither 0 nor 100`);


// Exercise 8: Verify if a boolean value is true
let flag: boolean = true;
let isTrue: boolean = flag === true;
console.log (`Flag is ${isTrue}`);


// Exercise 9: Check if a number is odd and greater than 50

let oddCheck: number = 53;
let isOddAndLarge: boolean = oddCheck % 2 !== 0;

if (isOddAndLarge) {
  if(oddCheck > 50) {
    console.log(`${oddCheck} is Odd and greater than 50`);
  } else {
    console.log(`${oddCheck} is Odd and smaller than 50`);
  }
 
} else {if(oddCheck < 50){
           console.log(`${oddCheck} is Even and smaller than 50`);
           } else {
            console.log(`${oddCheck} is Even and greater than 50`)
           }
 }
        
// Exercise 10: Determine if a string starts with the letter 'A'
let word: string = "APPLE";
let startsWithA: boolean = word.startsWith('A');
console.log(startsWithA ? `Word ${word} starts with letter 'A'`: `Word ${word} dosen't start with letter 'A'`);