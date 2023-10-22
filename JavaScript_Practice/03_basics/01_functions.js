function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
console.log(sayMyName); //[Function: sayMyName]--reference of the function
// sayMyName() //executes the function with parentheses

/************NO use of return inside ----> {}************************/
function addition(number1, number2) {
  console.log(number1 + number2);
}
console.log("Result of addition : ", addition(2, 4)); // undefined

/// ==============================Return is the last code executed in fuction ========= 2 methods to use return========
function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
  //// after retune no code is executed here
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

/**------------------default parameter and if statement  */

function loginUserMessage(username) {
  //   if ("") { // empty string --considered -----false Value-------------
  //   if (username == undefined) {
  if (!username) {
    console.log("PLease enter a username");
    return; // return nothing
  }
  return `${username} just logged in`; // if above return is excuted than following return will be halt/inactive--
}

console.log(loginUserMessage());
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("hitesh"))

//================restParameter============================
function calculateCartPrice(val1, val2, ...num1) {
  //   return num3; //ReferenceError--- variable name must be same
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000, 423, 666)); // [ 500, 2000, 423, 666 ]

// ===========================passing object in argument =========================
const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject1(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}` // accessing obj properties
  );
}

handleObject1(user);
/**************passing direct obj as argument in fuc ****************************/
handleObject1({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));// direct array pass as args
