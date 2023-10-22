//  Primitive Datatype***Stack Memory ***  --Get by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// typeof   : string, number, boolean, object, undefined,symbol, bigint
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; // empty      ----typeof(null) == object
let userEmail; // undefined --declared but not initialized

const id = Symbol("123"); // retunn new unique symbol value
const anotherId = Symbol("123");

console.log(id === anotherId); // false
console.log(id);
console.log(anotherId);

const bigNumber = 3456543576654356754n; //BigInt

console.log(typeof bigNumber);

// Non primitive****HeapMemory****  ---Get by Reference    ---typeof(Non-primitive)= object

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3

// **********************NOTE: MEMORY ALLOCATION IN STACK VS HEAP*******************************************

// stack
let OriginalStack = "memory for string";
let copy_OrignalStack = OriginalStack;
// updating copy rather than original data in stack so different memory allocation for original and copy in stack
copy_OrignalStack = "changing copy of stack but OriginalStack doesn't change ";

console.log(OriginalStack); //memory for string
console.log(copy_OrignalStack); //changing copy of stack but OriginalStack doesn't change

// Heap  ---Refference so original data changes4
let ObjInHeap_first = {
  name: "hitesh",
  age: 22,
};

let ObjectsInHeap_2nd = ObjInHeap_first; // creating new object by taking reference to original

console.log(`Before updating Referenced obj : ${ObjInHeap_first.name}`); // hitesh
ObjectsInHeap_2nd.name = "pradeep";
console.log(`After updating Referenced obj : ${ObjInHeap_first.name}`); //Pradeep

console.log(ObjectsInHeap_2nd);//{ name: 'pradeep', age: 22 }
console.log(ObjInHeap_first);//  { name: 'pradeep', age: 22 }
