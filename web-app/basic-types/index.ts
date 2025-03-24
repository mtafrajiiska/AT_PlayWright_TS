//let vs const
let number: number = 5;
number = 10;

const message: string = "Welcome";

//string

let welcomeMessage: string = "Hello, Peter!";
let ntest : string = "Ivan";

let welcomeMessageLength: number = welcomeMessage.length;

//string interpolation
let welcomeMessageDetails: string='My welcome message length is ${welcomeMessageLength}';
let userWelcomeMessage: string = 'Welcome ${test}';

//Number
let firstNumber: number = 5;
let secondNumber: number = 10;

// Number math operations
let add: number = secondNumber + firstNumber;
let substract: number = secondNumber - firstNumber;
let multiply: number = secondNumber * firstNumber;
let divide: number = secondNumber / firstNumber;


// Boolean (True/ False)
let isGreater: boolean=firstNumber>secondNumber;
let isLower: boolean = firstNumber< secondNumber;
let isEqual: boolean = firstNumber===secondNumber;
let isGreaterOrEqual: boolean = firstNumber>=secondNumber;
let isLowerOrEqual: boolean = firstNumber<=secondNumber;

let areNumbersEqualTo: boolean = 5===firstNumber && 10===secondNumber;
let isAnyNumberEqualTo: boolean = 6===firstNumber||10===secondNumber;

//Any 

let stringValue: any="Hello";
stringValue = 10;
stringValue = 10===10;
stringValue = [10,20,30];

// 27.02.2025 
// Ternary operator
const isPositiveNum: string = 
5>0? "The number is positive" : "The number is negative";

const age: number = 30;
const myName: string = "Pesho";

const personDescription = 
age < 40
 ? `${myName} is younger than 40. He is ${age} years old.`
 : `${myName} is older than 40. He is ${age} years old.`;

 const personName = `His name is "${myName}".`;

 console.log("personName", personName);

// If Else Statement

if (age < 40) {
    console.log("Age are lower than 40");
}else{
    console.log("Age are greater than 40");
}

const numm: number = 100;

if (numm <=10){
    console.log("The number is lower than 10.");
    } else if (numm > 80) {
    console.log("The number is greater than 80 and less than 100.");
    } else if (numm >= 100) {
     console.log("The number is greater than 100.");   
    } else {
        console.log("The number is between 10 and 100.");
    }




// Arrays
//type PersonInfoType = string | number;

//const personNameInf: PersonInfoType = "Ivan";
//const personNameInf: PersonInfoType = 25;

// 04.03.2025

//Type Alias
type PersonInfoType = string | number;
const personNameInf: PersonInfoType = "Ivan";
const personNameInf1: PersonInfoType = 25;

type Status = "approved" | "rejected" | "pending"| "fullfiled";
const currentStatus: Status = "fullfiled" 

type PersonData = {
    name: string;
    lastName: string;
    age: number;
    city: "Sofia" | "Plovdiv" | "Varna";
};


