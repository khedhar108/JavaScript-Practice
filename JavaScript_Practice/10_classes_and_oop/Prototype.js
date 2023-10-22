// let myName = "hitesh     "
// let mychannel = "chai     "

//// console.log(myName.trim().length);
// console.log(myName.trueLength); // apply only single variable


// --new------***********-------------common prototype method for all stings---------***********---------
let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`); // all variables than hold string are : ChaiAurCode , hitesh, icetea
  console.log(`True length is: ${this.trim().length}`);
};


anotherUsername.trueLength();
// "hitesh".trueLength();
// "iceTea".trueLength()



/**==========================prototypal inheritance====for datatype====================================================================== */
let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// Prototype at orginal object : applied on all objects
Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};
heroPower.hitesh(); // 👍
myHeros.hitesh(); // type of array is object 👍

// Prototype at orginal Array : applied on all array
Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

myHeros.heyHitesh(); // works well with array 👍
// heroPower.heyHitesh(); // typeof object 👎

// ===================inheritance==========getPrototypeOf() vs setPrototypeOf()======================================

// creating 3 objects
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};


// -------mehtod 1 ----------------old syntax: __proto__   ---depricated not work all browsers
// const TASupport = {
//   makeAssignment: "JS assignment",
//   fullTime: true,
//   __proto__: TeachingSupport, // inside object
// };

// Teacher.__proto__ = User// outside object
// console.log("__proto__",Teacher.email)
// ---------------------------------------------------------------------





// ---method 2 -----ModernSyntax--------setPrototypeOf(addwhere, addwhat)---------
Object.setPrototypeOf(Teacher, User);
console.log("setPrototypeOf", Teacher.name, Teacher.email)
console.log(`${Teacher.name}`);
//======= modern syntax=============
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport.makeVideo);




/**------------------------prototype-vs-proto-vs-prototypeinheritance-----------------------------------------
       Mdn:      https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
       Medium:   https://medium.com/@eamonocallaghan/prototype-vs-proto-vs-prototype-in-javascript-6758cadcbae8
   GeekforGeeks: https://www.geeksforgeeks.org/difference-between-proto-and-prototype/
 */
