// if
const isUserloggedIn = true;
const temperature = 41;

if (temperature == 40) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

/***************Operators for control flow*******************8 */
// <, >, <=, >=,
// =  assign operator
//  ==, !=     check value equal and not equal
// ===, !==   check value+ datatype-> equal and not equal

// --------------------------------------------------------------------
const score = 200;

let myname = "pradeep";
if (score > 100) {
  let power = "fly";
  myname = "hitesh";
  console.log(`User power: ${power}`);
  console.log(`Inside scope: ${myname}`);
}
console.log(`Outside scope after update: ${myname}`);
// console.log(`User power: ${power}`); // outside scope--ReferenceError

/******************Short hand syntax****implicit scope - no use of parenthisis - single line************************** */
const balance = 1000;
if (balance > 500) console.log("test"); //Good practice
// if (balance > 500) console.log("test"),console.log("test2");// Bad practice

/**********Multiple conditions***************** */
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

// -------------------  && and ||  operators------------------------
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// && and  --> Both must be true
if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}
//  or ||  at least one should be true
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
