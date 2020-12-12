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

