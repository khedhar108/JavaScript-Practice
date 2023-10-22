// array
/*====================method-1======================================= */
const myArr = [0, 1, 2, 3, 4, 5]; //Storing similar data type
const myHeors = ["shaktiman", "naagraj", true, 1, 2, undefined, null]; //storing multiple datatypes Possivble

console.log(myHeors[5]); //undefined
console.log(typeof myArr); //object
/*======method-2============crates object=======================  */
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(myArr2); //[ 1, 2, 3, 4 ]
console.log(myArr2[1]);

console.log("Length:" + " " + myArr.length + " " + "old way");
console.log("Length:", myArr.length); // no space
console.log(`Length Property : ${myArr.length}`); // space added  - modern implementation

//=====================================Array methods----Modify Orginal Array====================================
// myArr.push(6) // adding at last

// myArr.pop()// remove last element

// myArr.shift() // remove first element- no parameter
// myArr.unshift(9) //insert at start and if array is big than each value will shift can cause load on system

// console.log(myArr.includes(9)); // return boolean
// console.log(myArr.indexOf(3)); // return index of {existing value} and return -1 for non-existing value
// console.log(myArr.indexOf(99)) // -1

// =====================Join---crates string from array elements===============================
// const newArr = myArr.join()
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
// console.log(myArr);
// console.log( newArr);

//==========================slice, splice======================================
console.log("**************slice vs splice**********");

console.log("Origianl", myArr);

const myn1 = myArr.slice(1, 3); // include, exclude

console.log("slice : return", myn1); // only target 1st_element, 2nd_element
console.log("slice: no modidfication with origianl array ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("splice: return", myArr);
console.log("splice: modify orignal array ", myn2);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//?? what do you understand by shallow copy and deep copy with respect to js arrays ?
