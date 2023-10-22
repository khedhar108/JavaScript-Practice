// singleton---when object is created by constructor in below create method
// Object.create

// object literals--> const object = {key:value, ...}

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary", // not accessible by "."   ---accessible by ["key"]  beacause key is in string format
  [mySym]: "mykey1", //? how to add symbol as key ?  // return symbol as data type
  mySym: "mykey1", //return typeof string
  age: 18, // system access age as "age"
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
/**========================Object properties accessing using "." and using ["key"]=>***key goes inside/in  string by system while accessing***============================== */
// console.log(JsUser.email)
// console.log(JsUser["email"])
/** accessing key in double quotes and symbol----------------------- */
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// ========================freeze============  =============================
JsUser.email = "pradeep@chatgpt.com";
// Object.freeze(JsUser) //after freezing can't update the anything
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

// =========================adding function in object====================
JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // this holds all pointer which target references to JS user[object] properties
};

console.log(JsUser.greeting); //[Function (anonymous)]  -- only getting function reference
console.log(JsUser.greeting()); //Hello JS user
// console.log(JsUser.greetingTwo());


/**--------mdns -------------------- https://developer.mozilla.org/en-US/docs/Glossary/Object
 * In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String value or a Symbol value.

There are two types of object properties: The data property and the accessor property.
 */