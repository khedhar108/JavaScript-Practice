const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ===================================push behaviour --modify original array =================================
// marvel_heros.push(dc_heros); // crates array as single element - inside array ---bad idea=>[.....[...]]
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const totalhero = marvel_heros.push(dc_heros);
// console.log(totalhero); // return number of array elements = 4  beacuse push modify original array

// =========================concat - creates new array========================================
const allHeros = marvel_heros.concat(dc_heros); // crates array as single element - inside array ---bad idea
console.log("concat", allHeros);

/*====================Spread Operator with array===create new array================================= */

// const all_new_heros = [...marvel_heros, ...dc_heros];  // best way to concat multiple arrays
const all_new_heros_more_arrays_and_elements = [
  ...marvel_heros,
  ...dc_heros,
  "pradeep",
];

// console.log(all_new_heros);
// console.log(all_new_heros_more_arrays_and_elements)

// =============================merging multiple nested arrays  in single one==>>> flat(depth of merging)===========================
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array); // [1, 2, 3, 4, 5, 6 , 7, 6, 7, 4, 5]

// =======================Array constructor with some methods================================================================
console.log(Array.isArray("Hitesh")); // boolean  ---> checking data is in array or not during web scraping
console.log(Array.from("Hitesh")); // convderting each letter into array element  ----> string to array[Creates an array from an iterable object.]
console.log(Array.from({ name: "hitesh" })); // not iterable so return empty array-> []  ---can create array with keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]

/**
 Array is a built-in JavaScript object that represents a collection of elements.
 Array.of(): Creates a new array with a variable number of arguments, regardless of type.
 Array.from(): Creates a new array from an array-like or iterable object.
 Array.isArray(): Returns a boolean value indicating whether an object is an array.
 */




//  =============================filter method -- testcase =============================
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// ===================map method - create a transfromed new array =================
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]




// ======================= array.at===============
const array12 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array12.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array12.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"
