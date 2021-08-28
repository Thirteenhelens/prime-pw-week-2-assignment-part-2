// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it to "Dane'.
// We check if the name is exactly equal to 'Mary'.
// If that were true, we would console log 'Hi, Mary!'.
// Since it is not true, we log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret, and one called code. Code is equal to the number 123.
// We check if code is exactly equal to 123, it is, so we set secret to 'super' and we multiply code by 2, making it 246.
// Next, we check if code (with it's new value) is greater than 250.
// Since it isn't, we log the value of secret ('super') to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create 3 variables. First is isStudent, which is true. Second is age, which is 34; and finally zip,
// which is 55407. Next, we see if isStudent is true and if zip is less than 80000.
// Since only isStudent is correct, we do NOT exicute the code below, and move on.
// We then check if isStudent is false or if age is less than 30.
// Since neither is true, we move on to the next else if and do NOT exicute the code below.
// Next we check if isStudent is true, and since it is, we log 'Welcome to prime!' to the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - The instructions said to set both colorOne and colorTwo to 'purple',
// but only colorOne was changed. colorTwo should also be set to 'purple'.

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

// FIX - Instructions said that time is a varibale, but it is a constant.
// This should be changed to let time = 4;
// Also, instructions want both time and temp to be true in their comparisons,
// but || was used, meaning or. This should be replaced by &&, meaning and.

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

// FIX - Once again, instructions said minAge is a variable, but it is a constant.
// This should be changed to let minAge = 21;. Also, the result of (minAge <= age)
// is set to log 'no entry' to the console. Instructions ask for us to log 'enter' to console.
// The result of the else and if statements should be switched. 


/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
