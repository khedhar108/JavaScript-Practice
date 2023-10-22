//------start-------template literal vs Object literal---------------------
const username = "John";

// Using `${}`:- template literal syntax
const greeting = `Hello ${username}`; // "Hello John"

// Using object literal:- key:value pairs - create object instances
const obj = { name: "John" };

// --------end----------template literal vs Object literal----------------

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    /*this keyword - current context */
    // console.log(`Username: ${username}`);// undefined
    // console.log(`Username: ${this.username}`);
    console.log(this); // current context : user object
  },
};

//console.log(user.username) // access properties via key
//console.log(user.getUserDetails()); // access method and execute it
// console.log(this); // global object = window in browser and here {} in node environment


// -------new ----- new keyword =>creates a new empty object or create an instance,------ the this keyword refers to that newly created object---------------------------------
function User(username, loginCount, isLoggedIn) {
  // currentContext.Variable = value from parameter
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;//??????
}
//------------------------------ if we don't use new keyword : a single object is created whose values are overridden----------
// const userOne = new User("hitesh", 12, true);
// const userTwo = new User("ChaiAurCode", 11, false);
// console.log(userOne)
// ------------new creates an instance each time-----------
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor); // reffernce about self: [function : user]
//console.log(userOne);
//console.log(userTwo);


// check instanceof  in mdn docs---- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
