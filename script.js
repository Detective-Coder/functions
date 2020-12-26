// // defining a function
// function sayHello() {
//   console.log("hello world");
// }

// // call a function/execute a function
// sayHello();
// sayHello();

// // I Love JavaScript
// // Define a function that logs the string "I love JavaScript!" to the console.
// // Execute, or call, the function.

// function printPhrase() {
//   console.log("I love JavaScript");
// }

// printPhrase();

// function sayHello(friendName, greeting) {
//   console.log(`${greeting}, ${friendName}`);
// }

// sayHello("Joseph", "Heya");
// sayHello("Thomas", "Howdy");
// sayHello("Aaron", "Hey");
// sayHello("Tommy", "Hi");

// Write a function that accepts two parameters of name and destination.
function travelPlanner(name, destination) {
  console.log(`${name} wants to go to ${destination}.`);
}

// The function should log a sentence to the console about where that person wants to go.
// Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console.
travelPlanner("Aaron", "New Orleans");
travelPlanner("Mary", "Italy");
travelPlanner("Ringo", "Japan");

// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
function orderSystem(typeOfShell, topping) {
  let sentence = `Your ${typeOfShell} taco with ${topping} is ready.`;
  return sentence;
}

let tacoSentence = orderSystem("soft", "beef");
console.log(tacoSentence);

// Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// Return the taco sentence and store the returned sentence in a variable.
// Execute the function.
// Log the returned sentence to the console.

// Write a function called add. It should accept two numbers as parameters and log their sum to the console.
// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(2, 3);
// add(5, 5);
// add(10, 10);

// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
// function subtract(num1, num2) {
//   console.log(num1 - num2);
// }

// subtract(10, 5);
// subtract(2, 1);
// subtract(100, 50);

// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }

// multiply(2, 3);
// multiply(50, 50);
// multiply(4, 4);

// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
// function divide(num1, num2) {
//   console.log(num1 / num2)
// }

// divide(10, 2);
// divide(5, 1);
// divide(20, 15);
// Call each function three times with different parameters.

// Refactor your previous exercise so that each calculator function returns the result of its calculations. You should not have any console.logs inside your functions.
// When you execute your calculator functions, store each result in a new variable and log the variable to the console. The console.logs should now be outside the scope of your functions.
function add(num1, num2) {
  return num1 + num2;
}

let addition = add(2, 3);
console.log(addition);

function subtract(num1, num2) {
  return num1 - num2;
}

let subtraction = subtract(10, 5);
console.log(subtraction);

function multiply(num1, num2) {
  return num1 * num2;
}

let multiplication = multiply(2, 3);
console.log(multiplication);

function divide(num1, num2) {
  return num1 / num2;
}

let division = divide(10, 2);
console.log(division);

// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the console based on the person's preferred language.
// Write a function that accepts two parameters: name and language.
// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.
// let personObj = {
//   name: "Ted",
//   language: "French"
// }

function languageGreeting(name, language) {
  if (language === "English") {
    console.log(`Hello, ${name}!`);
  } else if (language === "Spanish") {
    console.log(`Hola, ${name}!`)
  } else if (language === "French") {
    console.log(`Bonjour, ${name}!`);
  } else {
    console.log(`Hi, ${name}`);
  }
}

// languageGreeting(personObj.name, personObj.language);
languageGreeting("Garfield", "French");

// Write a function that accepts three parameters: breadType (a string), sandwichName, and isToasted (a boolean).
// The function should check whether isToasted is true or false and build a sentence about the sandwich order accordingly.
// The function should return the sentence.
// Call the function three times, passing in three different sets of parameters.
// Example console output:

// "You ordered a toasted meatball sub sandwich on wheat."
function sandwichSentence(breadType, sandwichName, isToasted) {
  if (isToasted === true) {
    return `You ordered a toasted ${sandwichName} on ${breadType} bread.`;
  } else {
    return `You ordered a non-toasted ${sandwichName} on ${breadType} bread.`;
  }
}

let completedSentence = sandwichSentence("wheat", "chicken parm", true);
console.log(completedSentence);

let dwayneObject = {
  firstName: "Dwayne",
  nickName: "The Rock",
  lastName: "Johnson",
  favoriteFood: "Eggs",
  hobbies: ["jumping out of planes", "personally holding the San Andreas fault together", "building incredible muscle mass"]
}

function printHobbies(){
  for (let i = 0; i < dwayneObject.hobbies.length; i++) {
    console.log(dwayneObject.hobbies[i]);
  }
}
// The printHobbies function should loop through the array of Dwayne The Rock Johnson's hobbies and print each one to the console.

// Call the printHobbies function.
printHobbies();

let partyGuests = [
  {
    name: "Sam",
    age: 18
  },
  {
    name: "Jerry",
    age: 45
  },
  {
    name: "Lila",
    age: 29
  },
  {
    name: "Mary",
    age: 68
  },
  {
    name: "Todd",
    age: 10
  }
];

// Define the age checker function
// Function should accept two parameters: an array and an age to check
// Function should return an array of people who are at or above the cut off age

function ageChecker(peopleArray, cutOffAge) {
  let peopleWhoAreOldEnough = [];
  for (let i = 0; i < peopleArray.length; i++) {
    // check each person's age to see if it's at or above the cut off age we passed in
    if (peopleArray[i].age >= cutOffAge) {
      peopleWhoAreOldEnough.push(peopleArray[i]);
    } 
  }
  // once we've checked (i.e. looped over) every person in the array, we need to return the array of just people who are old enough
  return peopleWhoAreOldEnough;
}

function underageChecker(peopleArray, cutOffAge) {
  let peopleWhoAreNotOldEnough = [];
  for (let i = 0; i < peopleArray.length; i++) {
    if (peopleArray[i].age < cutOffAge) {
      peopleWhoAreNotOldEnough.push(peopleArray[i]);
    }
  }
  return peopleWhoAreNotOldEnough;
}

// Execute the function
// Since it now RETURNS an array, we have to catch the returned value in a variable
let peopleWhoCanDrink = ageChecker(partyGuests, 21);
let peopleWhoCannotDrink = underageChecker(partyGuests, 21);
console.log(peopleWhoCanDrink);
console.log(peopleWhoCannotDrink);
console.log(`${peopleWhoCanDrink[0].name}, ${peopleWhoCanDrink[1].name}, and ${peopleWhoCanDrink[2].name} can drink. ${peopleWhoCannotDrink[0].name} and ${peopleWhoCannotDrink[1].name} are too young.`);
// Loop through the partyGuests and check if each guest is at least 21.
// Build a sentence or two about who can drink and who can't. (Example: " "Jery, Lila, and Mary can drink. Sam and Todd are too young.")
// Log the sentence to the console.

//  Make your function more reusable by adding parameters! Let's say that your next task is to sort through an array of people and figure out who is old enough to vote, not drink. You could write another function that does approximately the same thing, but with an array of potential voters and the cut off age of 18 instead of 21. But that would be a lot of repeat code, and our goal is to repeat ourselves as little as possible! Refactor your ageChecker function so that it accepts two parameters: an array of objects representing people (assume that they will be structured like the objects in the partyGuests array) and an age to check for. 
