//1.	 Create an array of strings and add a new element at the end of the array. Log the result.
let basket: string[] = ["Apple", "Pear", "Peach"];

basket.push("Mango");
console.log(basket);

//2.	Create an array of numbers and remove the first element from the array. Log the result.
let numArray: number[] = [1, 2, 3, 4, 5];
numArray.shift();
console.log(numArray);

//3. Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.

let array1: number[] = [8, 6, 58, 4];
let dividedNumbers = array1.map((x) => x / 2);
console.log(dividedNumbers);

// 4.Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.
let numbersArray1: number[] = [3, 7, 1, 9, 12, 4];
let filterNumsArray1 = numbersArray1.filter((element) => element > 5);
console.log(filterNumsArray1);

//5.Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
let numbersArray2: number[] = [9, 3, 7, 2, 8, 5];
console.log(numbersArray2.sort());

//6.Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
let sliceMethod: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(sliceMethod.slice(0, 3));

//7.Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
let spliceMethod: string[] = ["car", "bike", "bus", "train", "boat"];
spliceMethod.splice(1, 2);
console.log(spliceMethod);

//8.Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.
function findLargest(
  firstNum: number,
  secondNum: number,
  thirdNum: number
): number {
  if (firstNum >= secondNum && firstNum >= thirdNum) {
    return firstNum; // firstNum is the largest
  } else if (secondNum >= firstNum && secondNum >= thirdNum) {
    return secondNum; // secondNum is the largest
  } else {
    return thirdNum; //thirdNum is the largest
  }
}
console.log(findLargest(10, 25, 15));

// 9.Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number = 5): number {
  return inches * 2.54;
}

console.log("Default value (5 inches) in centimeters:", convertToCentimeters());

//10.Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
function calculateArea(width: number, height?: number): number {
  if (height === undefined) {
    return width * width;
  } else {
    return width * height;
  }
}
console.log("The shape is a square", calculateArea(5));
console.log("The shape is NOT a square", calculateArea(5, 10));
