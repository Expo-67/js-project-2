//String Manipulation Functions:

//Reverse a String: Write a function that reverses a given string.
function ReverseString(str) {
  const reversedString = str.split("").reduce((acc, char) => char + acc, "");
  console.log(reversedString);
}
ReverseString("hello");

//Count Characters: Create a function that counts the number of characters in a string.
function countCharacters() {
  var str = "Hello Earth!";
  console.log(str.length);
}
countCharacters();
//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function UpperLetter() {
  const str = "hello mars";
  let result = str.charAt(0).toUpperCase() + str.slice(1);

  console.log(result);
}
UpperLetter();
//Array Functions:

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMaximum(numbers) {
  return Math.max(...numbers);
}

function findMinimum(numbers) {
  return Math.min(...numbers);
}

const numbers = [1, 5, 2, 9, 4, 10];
const maximumNumber = findMaximum(numbers);
const minimumNumber = findMinimum(numbers);

console.log("Maximum number:", maximumNumber);
console.log("Minimum number:", minimumNumber);

//Sum of Array: Create a function that calculates the sum of all elements in an array.
function calculateSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const numbers = [1, 5, 2, 9, 4, 10];
const sum = calculateSum(numbers);

console.log("Sum:", sum);

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(numbers, condition) {
  return numbers.filter((number) => condition(number));
}

const numbers = [1, 5, 2, 9, 4, 10];
const filteredNumbers = filterArray(numbers, (number) => number > 5);

console.log("Filtered numbers:", filteredNumbers);

//Mathematical Functions:

//Factorial: Write a function to calculate the factorial of a given number.
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5)); // Output: 120

//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      let nextNum = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNum);
    }
    return sequence;
  }
}

console.log(fibonacci(6)); // Output: [0, 1, 1, 2, 3, 5]
