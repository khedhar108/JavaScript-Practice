const userEmail = []; // empty array --> true
const userEmail11 = ""; // empty string --> false  //Badpractice

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//-------------------- falsy values-------------
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//--------truthy values-------iinside string some falsevalues covert into true--------------
// "0", 'false', " ", [], {}, function(){}

/******************how to check empty array and object*********************************** */
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

/****************************Nullish Coalescing Operator (??): null undefined********used during firebase / appwrite***************************************** */
// -----when work with database sometime not get value in that situation we can use it------
// 1st value thet is get is assigned
let val1;
// val1 = 5 ?? 10 // 1st value -5
// val1 = null ?? 15    // rather than 15 here is a result of complex function
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

/********************************* Terniary Operator***************************** */

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

/************* In browser console************************** */
false == 0; //true
false == ""; //true
0 == ""; //true
