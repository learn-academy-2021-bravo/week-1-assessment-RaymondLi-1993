// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// I want to create a function expression that will take in the temp variables.
//I should use some if/else statements to determine if the temp is boiling or below boiling
//I want to return a string
//potentially check if a given input is valid 


var temp1 = 35
var temp2 = 350
var temp3 = 212

const temperatureChecker = (temp) => {
   if(typeof temp !== "number") return "Please enter a valid number";
   
   if(temp === 212){
      return `${temp} is boiling point`; 
   } else if(temp < 212) {
     return `${temp} is below boiling point`;  
   } else {
    return `${temp} is above boiling point`;    
   }
}

//console.log(temperatureChecker(temp3));




// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

//I want to create a function expression that takes in an array and return the array multiplied by 5
//Create a empty return array;
//perform a for loop through all the elements within the array 
//take each element multiply it by 5 and push it into the empty array;
//return the array.

var myNumbers1 = [3, 7, 0, 6, -9]

const multiply5 = (myNumbers1) => {
   let newArray = [];
   
   for (let i = 0; i < myNumbers1.length; ++i){
      newArray.push(myNumbers1[i] * 5);
   }
   return newArray;
}

//console.log(multiply5(myNumbers1));




// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

//I want to create a function expression that takes in an array of numbers
//I want to create an empty array that will return with the results
//I want to perform a for loop that will check if each element is a odd or even number;
//push odd numbers into array and return

var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]

const checkOdd = (myNumbers2) => {
   let newArray = [];
   
   for (let i = 0; i < myNumbers2.length; ++i){
       if(myNumbers2[i] % 2 !== 0){
           newArray.push(myNumbers2[i]);
       }
   }

   return newArray;
} 

//console.log(checkOdd(myNumbers2));



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

//Create a function expression that will check if there are vowels in the string
//create a empty string that will concat letters that are not "aeiou" to the empty string
//create an array that has the vowels and can be checked against the string
//create a for loop that will check every individual character in the string and check if its a vowel
//concat only the strings that are not vowels
//return the string without the vowels at the end

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const checkVowels = (string) => {
    let newString = ``;
    let vowels = [`a`, `e`, `i`, `o`, `u`];

    for (let i = 0; i < string.length; ++i){
        if(!vowels.includes(string[i].toLowerCase())){
           newString += string[i]; 
        }
    }
    return newString;
}

//console.log(checkVowels(stringWithVowels2));





// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

//Create a function expression that will check if there are vowels in the string
//create a empty string that will concat letters that are not "aeiou" to the empty string
//create an array that has the vowels and can be checked against the string
//create a for loop that will check every individual character in the string and check if its a vowel
//concat only the strings that are not vowels
//return the string without the vowels at the end

//* REFACTORED CODE *

//Add a condition that will check if the input is a valid input
//a valid input is only strings so it shouldn't have numbers, booleans, undefined, null, symbols


var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"


const checkVowelsRefactored = (string) => {
    if(typeof string !== "string"){
        return "Sorry not a valid input! Please enter a string"
    }

    let newString = ``;
    let vowels = [`a`, `e`, `i`, `o`, `u`];

    for (let i = 0; i < string.length; ++i){
        if(!vowels.includes(string[i].toLowerCase())){
           newString += string[i]; 
        }
    }
    return newString;
}

console.log(checkVowelsRefactored(refactorTester3));