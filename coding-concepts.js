// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2021"
 //console.log(cohort.length)

// a) Your answer: The length of cohort is going to be 9  

// b) Verify and explain: // My answer was 9, but the actual correct answer was 10. I'm not exactly sure where the extra character might be coming from because I started the count at 0 starting from B till 1 including white space and I only got 9. I think there might be an additional white space somewhere that I cant see.



// --------------------2) What will this log?

var greeting = "Hello World!"
 //console.log(greeting[3])

// a) Your answer: The console.log() should print out the char at index 3 which would be l
// b) Verify and explain: I got the correct answer. 


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
 //console.log(languages[index])

// a) Your answer: The answer is going to be Ruby.
// b) Verify and explain: I got the correct answer as index's start at 0 and increment from there. Javascript is at index 0 and ruby is at index 1.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
 //console.log(weekendDays.toUpperCase())

// a) Your answer: I don't think this method is going to work because uppercase is a method associated with strings.
// b) Verify and explain: I was correct I got an error that says weekendDays is not a function. It is because its an array and arrays do not have that the toUpperCase method.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
 console.log(typeof dataTypes.length)

// a) Your answer: I don't think this method is going to work as typeof does not check the data structure of a variable.
// b) Verify and explain: I was totally wrong. I assumed that it was checking the array itself, but it was actually checking the .length method. I definitely have to pay more attention to exactly what the code is saying. 
